import Link from "next/link";
import {
  Hammer,
  PenLine,
  FolderHeart,
  Github,
  Twitter,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <main className="space-y-12">
      <h1 className="text-5xl my-20">
        Bassam_Ahmed<span className="opacity-10">.md</span>
      </h1>
      <section>
        <h2 className="text-lg uppercase tracking-wider ">## What's new</h2>
        <div className="space-y-3 opacity-60">
          <p>
            - I'm moving to SF for Jan-Apr 2026 for an internship, reach out if
            you're in the area and wanna hang
          </p>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg uppercase tracking-wider ">## Who I am</h2>
        <div className="space-y-1 opacity-60">
          <p>
            - at the core, a builder/creator, recently started writing and
            curating
          </p>
          <p>
            - CS @ UWaterloo | SWE @ Automax (YC F25) | prev. @ Stably (YC W22),
            PlayStation
          </p>
          <p>
            - I often jump from one obsession to another, and plan on doing so
            until I've found one worth sticking to
          </p>
          <p>
            - currently obsessing over:{" "}
            <span className="font-bold">
              Pixar's History / Computer Graphics in Animation
            </span>
          </p>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg uppercase tracking-wider ">## What I do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/building"
            className="block group hover:bg-foreground/5 p-3 border border-border hover:border-foreground/40 transition-all"
          >
            <div className="flex items-center gap-2 mb-1">
              <Hammer className="w-[1em] h-[1em]" />
              <h3 className="font-bold group-hover:text-foreground transition-colors">
                Build
              </h3>
            </div>
            <p className="opacity-60 text-sm">
              Results of explorations and tinkerings
            </p>
          </Link>
          <Link
            href="/writing"
            className="block group hover:bg-foreground/5 p-3 border border-border hover:border-foreground/40 transition-all"
          >
            <div className="flex items-center gap-2 mb-1">
              <PenLine className="w-[1em] h-[1em]" />
              <h3 className="font-bold group-hover:text-foreground transition-colors">
                Write
              </h3>
            </div>
            <p className="opacity-60 text-sm">
              About whatever I'm obsessed with at the moment
            </p>
          </Link>
          <Link
            href="/thinking"
            className="block group hover:bg-foreground/5 p-3 border border-border hover:border-foreground/40 transition-all"
          >
            <div className="flex items-center gap-2 mb-1">
              <FolderHeart className="w-[1em] h-[1em]" />
              <h3 className="font-bold group-hover:text-foreground transition-colors">
                Curate
              </h3>
            </div>
            <p className="opacity-60 text-sm">
              Just some cool stuff from the intrawebs
            </p>
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg uppercase tracking-wider ">## CONNECT</h2>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/baamahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="w-[1em] h-[1em]" />
            github
          </a>
          <a
            href="https://twitter.com/thebaamahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Twitter className="w-[1em] h-[1em]" />
            twitter
          </a>
        </div>
      </section>
    </main>
  );
}
