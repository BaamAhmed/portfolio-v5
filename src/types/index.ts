export interface WritingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  slug: string;
  tags?: string[];
}

export interface BuildingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  github?: string;
  status: 'active' | 'archived' | 'exploring';
  tags?: string[];
}

export interface ThinkingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  type: 'article' | 'tool' | 'resource' | 'inspiration';
}

