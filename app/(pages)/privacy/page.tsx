import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import PrivacyContent from "@/components/ui/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Cardcentrals Privacy Policy to understand how we collect, use, and protect your personal information.",
  keywords: [
    "Cardcentrals privacy",
    "privacy policy",
    "data protection",
    "personal information",
  ],
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Cardcentrals",
    description:
      "How Cardcentrals collects, uses, and protects your personal information.",
    url: "/privacy",
    type: "article",
    images: [{ url: "/images/Hero.jpg", width: 1200, height: 630, alt: "Cardcentrals Privacy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Cardcentrals",
    description:
      "How Cardcentrals collects, uses, and protects your personal information.",
    images: ["/images/Hero.jpg"],
  },
};

export default function PrivacyPage() {
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

        {/* Dot grid overlay */}
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

        {/* Hero content */}
        <div className="relative flex flex-col items-center text-center px-5 pt-[190px] sm:pt-[150px] md:pt-[170px] xl:pt-[250px] gap-[14px] sm:gap-[18px]">

          {/* Badge */}
          <div
            className="animate-fade-up flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
            style={{
              background: "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
              borderColor: "rgba(1,89,199,0.2)",
            }}
          >
            <span className="font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px] leading-[19.5px]">
              PRIVACY POLICY
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up anim-delay-100 font-extrabold text-[#191919] text-[28px] sm:text-[42px] md:text-[52px] xl:text-[60px] leading-[1.1]">
            Privacy Policy
          </h1>

          {/* Last updated */}
          <p className="animate-fade-up anim-delay-200 font-bold text-[#525252] text-[15px] sm:text-[18px]" style={{ lineHeight: "27.2px" }}>
            Last Updated: 12th April, 2026.
          </p>

          {/* Intro */}
          <p
            className="animate-fade-up anim-delay-300 font-medium text-[#525252] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[700px] xl:max-w-[900px]"
            style={{ lineHeight: "1.7" }}
          >
            Welcome to Cardcentrals. Your privacy is important to us, and we are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
      
          </p>

          <p
            className="animate-fade-up anim-delay-300 font-medium text-[#525252] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[700px] xl:max-w-[900px]"
            style={{ lineHeight: "1.7" }}
          >
            By using Cardcentrals, you agree to the terms of this Privacy Policy.
      
          </p>

        </div>
      </section>

      {/* ── Privacy Content ───────────────────────────────────────────────────── */}
      <PrivacyContent />

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <CallToAction />

    </main>
  );
}
