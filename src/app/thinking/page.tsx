import { thinkingItems } from '@/data/dummy';
import { ExternalLink } from 'lucide-react';

const typeLabel: Record<string, string> = {
  article: 'article',
  tool: 'tool',
  resource: 'resource',
  inspiration: 'inspiration',
};

export default function ThinkingPage() {
  return (
    <main className="space-y-12">
      <h1 className="text-5xl my-20">
        Curate<span className="opacity-10">.md</span>
      </h1>

      <section className="space-y-6">
        {thinkingItems.map((item) => (
          <article key={item.id} className="space-y-1 pb-6 border-b border-border last:border-0">
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
              <time className="opacity-60 text-xs whitespace-nowrap">{item.date}</time>
            </div>
            <p className="opacity-60 text-sm pl-6">{item.description}</p>
            <div className="text-xs opacity-60 pl-6">
              {typeLabel[item.type]}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

