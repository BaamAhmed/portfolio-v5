import { WritingItem, BuildingItem, ThinkingItem } from "@/types";

export const buildingItems: BuildingItem[] = [
  {
    id: "1",
    title: "Portfolio v5",
    date: "2024-03-20",
    description:
      "A minimal, terminal-inspired portfolio website built with Next.js.",
    link: "https://example.com",
    github: "https://github.com/example/portfolio-v5",
    status: "active",
    tags: ["next.js", "react", "typescript"],
  },
  {
    id: "2",
    title: "CLI Task Manager",
    date: "2024-02-15",
    description:
      "A command-line task management tool with a focus on simplicity.",
    github: "https://github.com/example/cli-tasks",
    status: "exploring",
    tags: ["cli", "productivity", "rust"],
  },
  {
    id: "3",
    title: "Markdown Blog Engine",
    date: "2023-12-01",
    description:
      "A lightweight static site generator for markdown-based blogs.",
    github: "https://github.com/example/md-blog",
    status: "archived",
    tags: ["markdown", "static-site", "go"],
  },
];

export const thinkingItems: ThinkingItem[] = [
  {
    id: "1",
    title: "The Grug Brained Developer",
    date: "2024-03-18",
    description:
      "A humorous yet insightful take on software development complexity.",
    link: "https://grugbrain.dev/",
    type: "article",
  },
  {
    id: "2",
    title: "Monodraw",
    date: "2024-03-10",
    description:
      "A powerful ASCII art editor for creating diagrams in plain text.",
    link: "https://monodraw.helftone.com/",
    type: "tool",
  },
  {
    id: "3",
    title: "Uses This",
    date: "2024-02-25",
    description:
      "A collection of interviews asking people what they use to get stuff done.",
    link: "https://usesthis.com/",
    type: "inspiration",
  },
  {
    id: "4",
    title: "ASCII Table",
    date: "2024-02-18",
    description:
      "A comprehensive ASCII character reference with decimal, hex, and binary values.",
    link: "https://www.asciitable.com/",
    type: "resource",
  },
];
