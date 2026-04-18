"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CallToAction from "@/components/ui/CallToAction";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function DownloadClient() {
  const stats = useReveal();

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

        {/* Content: badge + heading + description + buttons */}
        <div className="relative flex flex-col items-center text-center px-5 pt-[190px] sm:pt-[150px] md:pt-[170px] xl:pt-[250px] gap-[14px] sm:gap-[18px]">

          {/* DOWNLOAD badge */}
          <div
            className="animate-fade-up flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
            style={{
              background: "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
              borderColor: "rgba(1,89,199,0.2)",
            }}
          >
            <span className="font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px] leading-[19.5px]">
              DOWNLOAD
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up anim-delay-100 font-extrabold text-[#191919] text-[28px] sm:text-[42px] md:text-[52px] xl:text-[60px] leading-[1.1]">
            Download The App
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up anim-delay-200 font-medium text-[#525252] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[580px] xl:max-w-[662px]"
            style={{ lineHeight: "1.7" }}
          >
            Take Cardcentrals with you wherever you go. Download our mobile app to
            enjoy fast, secure, and seamless gift card trading right from your phone.
          </p>

          {/* Download buttons */}
          <div className="animate-fade-up anim-delay-300 flex flex-wrap items-center justify-center gap-[12px] mt-[9px]">

            {/* Google Play */}
            <a
              href="#"
              className="relative flex items-center bg-[#0159c7] rounded-[15px] hover:opacity-90 transition-opacity shrink-0"
              style={{ width: 177, height: 60, border: "5px solid rgba(18,108,248,0.5)" }}
            >
              <div className="absolute size-[20px]" style={{ left: 22.5, top: "50%", transform: "translateY(-50%)" }}>
                <Image src="/icons/google-play.png" alt="" fill sizes="20px" className="object-contain" />
              </div>
              <div className="absolute flex flex-col items-start" style={{ left: 55.5, top: 5 }}>
                <p className="font-medium text-[12px] leading-[18px] text-white whitespace-nowrap">Download on</p>
                <p className="font-bold text-[16px] leading-[18px] text-white whitespace-nowrap">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="relative flex items-center bg-white border-[2px] border-[#e5e5e5] rounded-[15px] hover:bg-gray-50 transition-colors shrink-0"
              style={{ width: 166, height: 60 }}
            >
              <div
                className="absolute flex gap-[13px] items-center"
                style={{ left: 23.64, top: "50%", transform: "translateY(-50%)" }}
              >
                <div className="relative shrink-0 size-[20px]">
                  <Image src="/icons/apple-logo.png" alt="Apple" fill sizes="20px" className="object-contain" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-medium text-[12px] leading-[18px] text-[#191919] whitespace-nowrap">Download on</p>
                  <p className="font-bold text-[16px] leading-[18px] text-[#191919] whitespace-nowrap">Apple Play</p>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Stats row */}
        <div
          ref={stats.ref}
          className={`reveal${stats.visible ? " visible" : ""} relative flex justify-center mt-[48px] sm:mt-[60px] xl:mt-[76px] pb-[100px]`}
        >
          <div className="flex items-center flex-wrap justify-center gap-y-4">

            <div className="flex flex-col items-start px-4 sm:px-0">
              <span className="font-bold text-[18px] sm:text-[20px] leading-[30px] text-[#191919]">10k+</span>
              <span className="text-[14px] sm:text-[16px] leading-[25.6px] text-[#525252]">Happy Users</span>
            </div>

            <div className="bg-[#e5e5e5] w-[2px] h-[20px] mx-[20px] sm:mx-[33px]" />

            <div className="flex flex-col items-start">
              <span className="font-bold text-[18px] sm:text-[20px] leading-[30px] text-[#191919]">20k+</span>
              <span className="text-[14px] sm:text-[16px] leading-[25.6px] text-[#525252]">Total Downloads</span>
            </div>

            <div className="bg-[#e5e5e5] w-[2px] h-[20px] mx-[20px] sm:mx-[33px]" />

            <div className="flex flex-col items-start">
              <span className="font-bold text-[18px] sm:text-[20px] leading-[30px] text-[#191919]">4.9</span>
              <span className="text-[14px] sm:text-[16px] leading-[25.6px] text-[#525252]">User Rating</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Phone Mockup Image ─────────────────────────────────────────────────── */}
      <div
        className="relative w-full mockup-float mb-[60px] sm:mb-[80px] xl:mb-[100px]"
        style={{ aspectRatio: "1440/968" }}
      >
        <Image
          src="/images/downloadmockup.png"
          alt="Cardcentrals app mockup"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <CallToAction />

    </main>
  );
}
