import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import BlogClient from "./BlogClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles, tips, and guides from Cardcentrals on gift cards, exchange rates, and trading safely.",
  keywords: [
    "Cardcentrals blog",
    "gift card tips",
    "gift card guides",
    "trade gift cards safely",
    "gift card news",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Latest News & Articles | Cardcentrals Blog",
    description:
      "Articles on gift card trends, tips, and trading with confidence.",
    url: "/blog",
    type: "website",
    images: [{ url: "/images/blog11.png", width: 1200, height: 630, alt: "Cardcentrals Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News & Articles | Cardcentrals Blog",
    description:
      "Articles on gift card trends, tips, and trading with confidence.",
    images: ["/images/blog11.png"],
  },
};

export default function BlogPage() {
  return (
    <main>
      {/* ── Hero Section — mirrors DownloadClient exactly ── */}
      <section
        className="relative overflow-hidden"
        style={{
          marginTop: -95,
          backgroundImage:
            "linear-gradient(-32.42deg, rgb(255,255,255) 60%, rgba(166,201,255,0.15) 100%)",
        }}
      >
        {/* Dot grid overlay — same image / same props as every other page */}
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

        {/* Content — same top-padding scale as download page */}
        <div className="relative flex flex-col items-center text-center px-5 pt-[190px] sm:pt-[150px] md:pt-[170px] xl:pt-[250px] pb-[80px] sm:pb-[100px] xl:pb-[120px] gap-[14px] sm:gap-[18px]">

          {/* BLOGS badge — no animation */}
          <div
            className="animate-fade-up anim-delay-100 flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
            style={{
              background:
                "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
              borderColor: "rgba(1,89,199,0.2)",
            }}
          >
            <span className=" font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px] leading-[19.5px]">
              BLOGS
            </span>
          </div>

          {/* Heading — no animation */}
          <h1 className="animate-fade-up anim-delay-200 font-extrabold text-[#191919] text-[28px] sm:text-[42px] md:text-[52px] xl:text-[60px] leading-[1.1]">
            Latest News &amp; Articles
          </h1>

          {/* Subtitle — no animation */}
          <p
            className=" animate-fade-up anim-delay-300 font-medium text-[#525252] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[580px] xl:max-w-[662px]"
            style={{ lineHeight: "1.7" }}
          >
            Read our latest articles on gift card trends, tips, and everything
            you need to know about trading with confidence.
          </p>

        </div>
      </section>

      {/* ── Blog Cards — animation on images only ── */}
      <BlogClient />

      {/* ── Call To Action ── */}
      <CallToAction />
    </main>
  );
}
