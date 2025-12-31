import { thinkingItems } from "@/data/thinking";
import { ExternalLink } from "lucide-react";

const typeLabel: Record<string, string> = {
  article: "article",
  tool: "tool",
  resource: "resource",
  inspiration: "inspiration",
};

export default function ThinkingPage() {
  return (
    <main className="space-y-12">
      <h1 className="text-5xl my-20">
        Curate<span className="opacity-10">.md</span>
      </h1>

      <section className="space-y-6">
        {thinkingItems
          .sort((a, b) => Number(b.id) - Number(a.id))
          .map((item) => (
            <article
              key={item.id}
              className="space-y-1 pb-6 border-b border-border last:border-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 no-underline hover:opacity-70 transition-opacity"
                  >
                    {item.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </h2>
                <div className="opacity-60 text-xs whitespace-nowrap">
                  <time>{item.date}</time> | {item.type}
                </div>
              </div>
              <p className="opacity-60 text-sm pl-6">{item.description}</p>
            </article>
          ))}
      </section>
    </main>
  );
}
