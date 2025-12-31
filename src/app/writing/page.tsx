import Link from "next/link";
import { writingItems } from "@/data/writing";

export default function WritingPage() {
  return (
    <main className="space-y-12">
      <h1 className="text-5xl my-20">
        Writing<span className="opacity-10">.md</span>
      </h1>

      <section className="space-y-6">
        {writingItems.map((item) => (
          <article
            key={item.id}
            className="space-y-1 pb-6 border-b border-border last:border-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-base">
                <Link
                  href={`/writing/${item.slug}`}
                  className="no-underline hover:opacity-70 transition-opacity"
                >
                  {item.title}
                </Link>
              </h2>
              <time className="opacity-60 text-sm whitespace-nowrap">
                {item.date}
              </time>
            </div>
            <p className="opacity-60 text-sm pl-6">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
