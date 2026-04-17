import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const revalidate = 3600; // ISR: re-render at most once per hour

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render known slugs at build time; unknown slugs are SSR'd on first request
export async function generateStaticParams() {
  // Replace with real API call when blog data source is ready
  return [];
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    description: "Read this article on Cardcentrals blog.",
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Blog Detail: {slug}</h1>
      <CallToAction />
    </main>
  );
}
