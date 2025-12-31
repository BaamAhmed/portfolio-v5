import { buildingItems } from "@/data/dummy";
import { ExternalLink } from "lucide-react";

const statusEmoji: Record<string, string> = {
  active: "●",
  exploring: "○",
  archived: "▪",
};

export default function BuildingPage() {
  return (
    <main className="space-y-12">
      <h1 className="text-5xl my-20">
        Building<span className="opacity-10">.md</span>
      </h1>
      <section className="text-xs opacity-40">
        <p>● = active | ○ = exploring | ▪ = archived</p>
      </section>

      <section className="space-y-6">
        {buildingItems.map((item) => (
          <article
            key={item.id}
            className="space-y-1 pb-6 border-b border-border last:border-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-base flex items-center gap-2">
                <span className="opacity-60">{statusEmoji[item.status]}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 no-underline hover:opacity-70 transition-opacity"
                  >
                    {item.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span>{item.title}</span>
                )}
              </h2>
              <time className="opacity-60 text-sm whitespace-nowrap">
                {item.date}
              </time>
            </div>
            <p className="opacity-60 text-sm pl-6">{item.description}</p>
            {item.github && (
              <div className="text-xs opacity-60 pl-6">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:opacity-100 transition-opacity"
                >
                  github
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
