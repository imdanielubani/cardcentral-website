import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CallToAction from "@/components/ui/CallToAction";
import BlogDetailClient, { type BlogPost } from "./BlogDetailClient";

export const revalidate = 3600;

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sell-gift-cards-safely-nigeria",
    image: "/images/blog11.png",
    date: "Apr 18, 2026",
    title: "How to Sell Gift Cards Safely in Nigeria (2026 Guide)",
    paragraphs: [
      "Selling gift cards in Nigeria has become increasingly popular, but it's important to do it safely. With many platforms available, knowing how to avoid scams and get the best value is key.",
      "First, always use a trusted platform like CardCentrals. A reliable platform ensures your gift cards are verified properly and payments are processed quickly.",
      "Second, never share your gift card details with random individuals online. Many scammers pose as buyers and disappear after receiving your code.",
      "Third, always check the current rate before trading. Rates can change depending on demand, so it's important to trade at the right time.",
      "Finally, make sure you provide accurate details when submitting your gift card to avoid delays in payment.",
      "By following these simple steps, you can safely convert your gift cards into cash without stress.",
    ],
  },
  {
    slug: "mobile-apps-trade-gift-cards",
    image: "/images/blog33.png",
    date: "Apr 18, 2026",
    title: "Why Mobile Apps Are the Best Way to Trade Gift Cards",
    paragraphs: [
      "In today's fast-paced world, convenience is everything — and nowhere is that more true than in the gift card trading space. Mobile apps have completely transformed how Nigerians convert gift cards into cash.",
      "The biggest advantage of mobile apps is speed. With a few taps, you can submit your gift card details, get a live rate, and receive payment directly into your bank account — all within minutes.",
      "Security is another major benefit. Reputable apps like CardCentrals use encrypted connections and verified payment systems, so your transactions are protected from start to finish.",
      "Mobile apps also offer round-the-clock availability. Unlike physical exchange bureaus, you can trade your gift cards at 2 AM on a Sunday if you need to — no queues, no waiting.",
      "Rate transparency is another win. Top apps show you live exchange rates so you always know what you're getting before you commit to a trade.",
      "If you haven't already switched to a mobile app for your gift card trades, now is the time. Download CardCentrals and experience the fastest, safest way to cash out your gift cards.",
    ],
  },
];

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.paragraphs[0]?.slice(0, 155),
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <BlogDetailClient post={post} relatedPosts={relatedPosts} />
      <CallToAction />
    </main>
  );
}
