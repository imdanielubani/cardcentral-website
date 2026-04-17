export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  RATES: "/rates",
  BLOG: "/blog",
  BLOG_DETAIL: (slug: string) => `/blog/${slug}`,
  CONTACT: "/contact",
  FAQ: "/faq",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  DOWNLOAD: "/download",
} as const;
