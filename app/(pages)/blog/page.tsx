import type { Metadata } from "next";

export const revalidate = 3600; // ISR: re-render at most once per hour

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles, tips, and guides from Cardcentrals on gift cards, exchange rates, and more.",
};

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
    </main>
  );
}
