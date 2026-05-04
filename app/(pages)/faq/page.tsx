import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to frequently asked questions about selling gift cards on Cardcentrals — rates, payouts, security, and more.",
  keywords: [
    "Cardcentrals FAQ",
    "gift card questions",
    "how to sell gift cards",
    "Cardcentrals help",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Cardcentrals",
    description:
      "Answers to common questions about selling gift cards on Cardcentrals.",
    url: "/faq",
    type: "website",
    images: [{ url: "/images/Hero.jpg", width: 1200, height: 630, alt: "Cardcentrals FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Cardcentrals",
    description:
      "Answers to common questions about selling gift cards on Cardcentrals.",
    images: ["/images/Hero.jpg"],
  },
};

export default function FaqPage() {
  return (
    <main>

      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          marginTop: -95,
          backgroundImage:
            "linear-gradient(-32.42deg, rgb(255,255,255) 60%, rgba(166,201,255,0.15) 100%)",
        }}
      >

        {/* Dot grid overlay from herobgsection.png via CSS background — anchored top-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/herobgsection.png')",
            backgroundSize: "cover",
            backgroundPosition: "left top",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
          }}
        />

        {/* Hero content */}
        <div className="relative flex flex-col items-center text-center px-5 pt-[190px] sm:pt-[150px] md:pt-[170px] xl:pt-[250px] pb-[60px] sm:pb-[80px] xl:pb-[110px] gap-[14px] sm:gap-[18px]">

          {/* FAQs badge */}
          <div
            className="animate-fade-up flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
            style={{
              background: "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
              borderColor: "rgba(1,89,199,0.2)",
            }}
          >
            <span className="font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px] leading-[19.5px]">
              FAQS
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up anim-delay-100 font-extrabold text-[#191919] text-[28px] sm:text-[42px] md:text-[52px] xl:text-[60px] leading-[1.1] max-w-[280px] sm:max-w-none">
            Frequently Asked Questions
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up anim-delay-200 font-medium text-[#525252] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[580px] xl:max-w-[662px]"
            style={{ lineHeight: "1.7" }}
          >
            Got questions about how Cardcentrals works? We&apos;ve answered the most common
            questions to help you understand our platform, process, and how to get started
            quickly and safely.
          </p>

        </div>
      </section>

      {/* ── FAQ Accordion ─────────────────────────────────────────────────────── */}
      <FaqAccordion />

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <CallToAction />

    </main>
  );
}
