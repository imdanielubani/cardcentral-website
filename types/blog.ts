export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string; // ISO date string e.g. "2024-01-15"
  readingTime: number; // in minutes
  featured?: boolean;
}

export interface BlogCardProps {
  post: BlogPost;
}
