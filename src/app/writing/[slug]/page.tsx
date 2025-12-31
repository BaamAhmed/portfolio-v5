import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { writingItems } from "@/data/writing";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return writingItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function WritingSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const item = writingItems.find((w) => w.slug === slug);
  if (!item) {
    notFound();
  }

  const markdownPath = path.join(
    process.cwd(),
    "src",
    "data",
    "markdown",
    `${slug}.md`
  );
  const content = await fs.readFile(markdownPath, "utf-8");

  return (
    <main className="space-y-8">
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 transition-opacity no-underline"
      >
        <ArrowLeft className="w-3 h-3" />
        back
      </Link>

      <header className="space-y-2 pb-6 border-b border-border">
        <h1 className="text-2xl">{item.title}</h1>
        <div className="flex items-center gap-3 text-sm opacity-60">
          <time>{item.date}</time> | Bassam A.
        </div>
      </header>

      <article className="prose">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-xl mt-8 mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-lg mt-6 mb-3 opacity-90">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base mt-4 mb-2 opacity-80">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="my-4 leading-relaxed opacity-80">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="my-4 pl-6 space-y-1 opacity-80 list-disc">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-4 pl-6 space-y-1 opacity-80 list-decimal">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-4 pl-4 border-l-2 border-border opacity-70 italic">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              return isInline ? (
                <code className="px-1.5 py-0.5 bg-border/50 text-sm">
                  {children}
                </code>
              ) : (
                <code className="block my-4 p-4 bg-border/30 text-sm overflow-x-auto">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="my-4 p-4 bg-border/30 text-sm overflow-x-auto">
                {children}
              </pre>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                {children}
              </a>
            ),
            hr: () => <hr className="my-8 border-border" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      <footer className="pt-8 border-t border-border">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 transition-opacity no-underline"
        >
          <ArrowLeft className="w-3 h-3" />
          back to writing
        </Link>
      </footer>
    </main>
  );
}
