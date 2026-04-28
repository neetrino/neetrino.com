import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

export function BlogMarkdownContent({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        p: ({ children }) => <p>{children}</p>,
        ul: ({ children }) => <ul className="list-disc space-y-2 pl-5">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal space-y-2 pl-5">{children}</ol>,
        li: ({ children }) => <li>{children}</li>,
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-[#8aa8ff] underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
            rel="noreferrer"
            target="_blank"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-white/90">{children}</strong>
        ),
        code: ({ children }) => (
          <code className="rounded bg-white/[0.08] px-1.5 py-0.5 text-[0.92em] text-white/90">
            {children}
          </code>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
