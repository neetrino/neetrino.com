import { describe, expect, it } from "vitest";
import { cn } from "../utils";

describe("cn", () => {
  it("merges tailwind classes without conflicts", () => {
    expect(cn("px-2 py-1", "p-4")).toContain("p-4");
  });

  it("filters falsy values", () => {
    expect(cn("a", false, "b", undefined, "c")).toBe("a b c");
  });
});
