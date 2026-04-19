"use client";

import Image from "next/image";
import Link from "next/link";

const BLOG_POSTS = [
  {
    id: 1,
    image: "/images/blog1.png",
    date: "Apr 18, 2026",
    title: "How to Sell Gift Cards Safely in Nigeria (2026 Guide)",
    slug: "sell-gift-cards-safely-nigeria",
  },
  {
    id: 2,
    image: "/images/blog3.png",
    date: "Apr 18, 2026",
    title: "Why Mobile Apps Are the Best Way to Trade Gift Cards",
    slug: "mobile-apps-trade-gift-cards",
  },
];

export default function BlogClient() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-[100px] pt-10 pb-16 sm:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1240px] mx-auto">
        {BLOG_POSTS.map((post, idx) => (
          <article key={post.id} className="blog-card">

            <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden mb-5 shadow-sm">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
                priority={idx === 0}
              />
            </div>

            <p className="font-semibold text-[#191919] text-[14px] sm:text-[14px] leading-[24px] mb-3">
              {post.date}
            </p>

            <h2 className="font-bold text-[#191919] text-[22px] sm:text-[28px] xl:text-[35px] leading-[1.4] xl:leading-[49px] mb-5">
              {post.title}
            </h2>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center justify-center bg-[#0159c7] border-2 border-[#126cf8] text-white font-bold text-[14px] leading-[22.4px] rounded-[10px] h-[45px] px-6 whitespace-nowrap"
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
