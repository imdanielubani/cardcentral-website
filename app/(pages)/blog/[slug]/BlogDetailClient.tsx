"use client";

import Image from "next/image";
import Link from "next/link";
export interface BlogPost {
  slug: string;
  image: string;
  date: string;
  title: string;
  paragraphs: string[];
}

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogDetailClient({ post, relatedPosts }: Props) {
  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          marginTop: -95,
          backgroundImage:
            "linear-gradient(-32.42deg, rgb(255,255,255) 60%, rgba(166,201,255,0.15) 100%)",
        }}
      >
        {/* Dot grid overlay — identical to all other pages */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/herobgsection.png')",
            backgroundSize: "cover",
            backgroundPosition: "left top",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
            opacity: 100,
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col px-5 sm:px-8 xl:px-[250px] pt-[160px] sm:pt-[150px] md:pt-[170px] xl:pt-[250px] pb-[60px] sm:pb-[80px] xl:pb-[100px] gap-[14px] sm:gap-[18px]">

          {/* Back button */}
          <Link
            href="/blog"
            className="animate-fade-up inline-flex items-center gap-[8px] font-bold text-[#191919] text-[14px] leading-[22.4px] group w-fit"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="shrink-0 transition-transform duration-200 group-hover:-translate-x-1"
            >
              <path
                d="M8.75 2.625L4.375 7L8.75 11.375"
                stroke="#191919"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Go Back
          </Link>

          {/* Post title */}
          <h1
            className="animate-fade-up anim-delay-100 font-bold text-[#191919] leading-[1.15] xl:leading-[57.6px] max-w-[700px]"
            style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
          >
            {post.title}
          </h1>

          {/* Date */}
          <p className="animate-fade-up anim-delay-200 font-bold text-[#191919] text-[14px] sm:text-[14px]">
            Posted on {post.date}
          </p>
        </div>
      </section>

      {/* ── Featured image ── */}
      <section className="px-4 sm:px-8 xl:px-[100px] mt-[-8px] sm:mt-[-12px] mb-10 sm:mb-14">
        <div className="blog-image-reveal card-glow-anim shimmer-wrap max-w-[1077px] mx-auto rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)]">
          <div className="relative w-full aspect-[1077/555]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 90vw, 1077px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="px-4 sm:px-8 xl:px-[100px] mb-14 sm:mb-20">
        <div className="max-w-[700px] mx-auto flex flex-col gap-[24px] sm:gap-[28px]">
          {post.paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-medium text-[#525252] text-[15px] sm:text-[16px] leading-[1.9]"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── More posts ── */}
      {relatedPosts.length > 0 && (
        <section className="px-4 sm:px-8 xl:px-[100px] mb-14 sm:mb-20">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-bold text-[#191919] text-[22px] sm:text-[26px] xl:text-[30px] xl:leading-[30px] mb-8 sm:mb-10">
              More posts you may like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {relatedPosts.map((related, i) => (
                <article key={related.slug}>
                  {/* Card image */}
                  <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden mb-5 card-glow-anim shimmer-wrap shadow-[0_10px_40px_-8px_rgba(0,0,0,0.14)]">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width:768px) 100vw, 605px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Date */}
                  <p className="font-semibold text-[#191919] text-[14px] sm:text-[14px] leading-[24px] mb-3">
                    {related.date}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-bold text-[#191919] leading-[1.4] xl:leading-[49px] mb-5"
                    style={{ fontSize: "clamp(22px, 2.8vw, 35px)" }}
                  >
                    {related.title}
                  </h3>

                  {/* Read More */}
                  <Link
                    href={`/blog/${related.slug}`}
                    className="inline-flex items-center justify-center bg-[#0159c7] border-2 border-[#126cf8] text-white font-bold text-[14px] leading-[22.4px] rounded-[10px] h-[45px] px-6 whitespace-nowrap hover:opacity-90 active:scale-95 transition-all duration-200"
                  >
                    Read More
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
