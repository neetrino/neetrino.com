"use client";

import { useEffect } from "react";

function parseCookieNames(cookieHeader: string): string[] {
  if (!cookieHeader || cookieHeader.length === 0) {
    return [];
  }

  return cookieHeader
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter(Boolean);
}

function getClickDescription(target: Element): {
  tag: string;
  anchorHref: string | null;
  buttonLabel: string | null;
  buttonName: string | null;
  formAction: string | null;
  formMethod: string | null;
} {
  const anchor = target.closest("a");
  const form = target.closest("form");
  const btn = target.closest("button");

  let buttonLabel: string | null = null;
  let buttonName: string | null = null;
  if (btn) {
    const text = btn.textContent?.trim();
    buttonLabel = text && text.length > 0 ? text.slice(0, 120) : null;
    buttonName = btn.getAttribute("name");
  }

  return {
    tag: target.tagName,
    anchorHref: anchor?.getAttribute("href") ?? null,
    buttonLabel,
    buttonName,
    formAction: form?.getAttribute("action") ?? null,
    formMethod: form?.getAttribute("method") ?? null,
  };
}

function resolveTargetUrl(href: string | null, baseHref: string): URL | null {
  if (!href || href.startsWith("javascript:")) {
    return null;
  }

  try {
    return new URL(href, baseHref);
  } catch {
    return null;
  }
}

export type AdminDebugClientProps = {
  readonly enabled: boolean;
};

export function AdminDebugClient({ enabled }: AdminDebugClientProps) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    console.group("[ADMIN DEBUG] mounted");
    console.log("location.href", window.location.href);
    console.log("host", window.location.host);
    console.log("pathname", window.location.pathname);
    console.log("has document.cookie", document.cookie.length > 0);
    console.log("document.cookie names only", parseCookieNames(document.cookie));
    console.groupEnd();

    const onClickCapture = (event: MouseEvent): void => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const desc = getClickDescription(target);
      const rawHref = desc.anchorHref ?? desc.formAction;
      const targetUrl = resolveTargetUrl(rawHref, window.location.href);
      const pathForAdminCheck = targetUrl?.pathname ?? "";

      console.group("[ADMIN DEBUG] click");
      console.log("timestamp", new Date().toISOString());
      console.log("clickedTag", desc.tag);
      console.log("closestAnchorHref", desc.anchorHref);
      console.log("buttonTextSlice", desc.buttonLabel);
      console.log("buttonName", desc.buttonName);
      console.log("formAction", desc.formAction);
      console.log("formMethod", desc.formMethod);
      console.log("currentPathname", window.location.pathname);
      console.log("targetHref", rawHref);
      console.log("targetHostDiffers", targetUrl ? targetUrl.host !== window.location.host : null);
      console.log("targetPathStartsWithAdmin", pathForAdminCheck.startsWith("/admin"));
      console.log(
        "targetPathStartsWithLocaleAdmin",
        /^\/(en|ru|hy)\/admin/.test(pathForAdminCheck),
      );
      console.groupEnd();
    };

    const onBeforeUnload = (): void => {
      console.log("[ADMIN DEBUG] beforeunload", { href: window.location.href });
    };

    document.addEventListener("click", onClickCapture, true);
    window.addEventListener("beforeunload", onBeforeUnload);

    const originalFetch = window.fetch.bind(window);
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      const input = args[0];
      const init = args[1];
      const url =
        typeof input === "string" ? input : input instanceof Request ? input.url : String(input);
      const method = init?.method ?? (input instanceof Request ? input.method : "GET");

      const isAdminUrl = url.includes("/admin") || url.includes("/api/admin");
      if (isAdminUrl) {
        console.group("[ADMIN DEBUG] fetch");
        console.log({ url, method });
        console.groupEnd();
      }

      const response = await originalFetch(...args);

      if (isAdminUrl) {
        console.group("[ADMIN DEBUG] fetch response");
        console.log("requestUrl", url);
        console.log("status", response.status);
        console.log("redirected", response.redirected);
        console.log("response.url", response.url);
        console.log("x-admin-debug-auth-result", response.headers.get("x-admin-debug-auth-result"));
        console.log("x-admin-debug-auth-reason", response.headers.get("x-admin-debug-auth-reason"));
        console.log("x-admin-debug-redirect-to", response.headers.get("x-admin-debug-redirect-to"));
        console.log("x-admin-debug-pathname", response.headers.get("x-admin-debug-pathname"));
        console.log("x-admin-debug-host", response.headers.get("x-admin-debug-host"));
        console.log("location", response.headers.get("location"));
        console.groupEnd();
      }

      return response;
    };

    return () => {
      document.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.fetch = originalFetch;
    };
  }, [enabled]);

  return null;
}
