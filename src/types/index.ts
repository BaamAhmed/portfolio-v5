export interface WritingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  slug: string;
}

export interface BuildingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  github?: string;
  status: "active" | "archived" | "exploring";
}

export interface ThinkingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  type: "article" | "tool" | "tweet" | "movie";
}
