"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── scroll-reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Gold stars ── */
function Stars() {
  return (
    <div className="flex gap-[4px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="relative size-[28px] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#FFB545">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ── Section badge ── */
function Badge({ text }: { text: string }) {
  return (
    <div
      className="inline-flex items-center justify-center h-[38px] px-[35px] rounded-full border-2"
      style={{
        background: "rgba(1,89,199,0.08)",
        borderColor: "rgba(1,89,199,0.2)",
      }}
    >
      <span className="font-semibold text-[12px] text-[#0159c7] tracking-[0.48px] leading-[18px]">
        {text}
      </span>
    </div>
  );
}

/* ── Stats data ── */
const STATS = [
  { value: "10k+", label: "Happy Users", icon: "/icons/happyusers.png" },
  { value: "20k+", label: "Total Downloads", icon: "/icons/downloads.png" },
  { value: "4.9", label: "User Rating", icon: "/icons/userrating.png" },
];

/* ── How it works steps ── */
const STEPS = [
  {
    title: "Get Started",
    desc: "Download the Cardcentrals app and begin your journey in just a few taps.",
    img: "/images/login.png",
  },
  {
    title: "Create Your Account",
    desc: "Sign up (quickly) and set up your profile to access all features.",
    img: "/images/createanaccount1.png",
  },
  {
    title: "Start Trading",
    desc: "Submit your gift cards, get the best rates instantly, and receive your payment fast.",
    img: "/images/createanaccount 1.png",
  },
];

/* ── Gift cards ── */
const GIFTCARDS = [
  { image: "/icons/googlecard.png", alt: "Google Play" },
  { image: "/icons/streamcard.png", alt: "Steam" },
  { image: "/icons/amazoncard.png", alt: "Amazon" },
  { image: "/icons/itunecard.png", alt: "iTunes" },
  { image: "/icons/xboxcard.png", alt: "Xbox" },
  { image: "/icons/walmartcard.png", alt: "Walmart" },
];

/* ── Testimonial types & data ── */
interface Review {
  name: string;
  location: string;
  quote: string;
  bg: string;
  tall?: boolean;
  showLogo?: boolean;
}

const COL1: Review[] = [
  {
    name: "Daniel Chukwuemeka", location: "Nigeria",
    quote: "I've tried several platforms, but Cardcentrals is by far the fastest. Got paid within minutes!",
    bg: "#f3f3f4",
  },
  {
    name: "Grace Oluwatoyin", location: "Nigeria",
    quote: "The rates are really good compared to others. Plus, the app is very easy to use.",
    bg: "#0159c7", tall: true, showLogo: true,
  },
];

const COL2: Review[] = [
  {
    name: "Aisha Zainab", location: "Nigeria",
    quote: "Super smooth experience! No stress, no delays — just fast payment.",
    bg: "#f3f3f4",
  },
  {
    name: "Michael Emeka", location: "Nigeria",
    quote: "I was honestly scared at first, but after my first transaction, I knew this platform is legit.",
    bg: "#126cf8",
  },
  {
    name: "Chinedu Obinna", location: "Web designer",
    quote: "Customer support is very responsive. They helped me through my first trade.",
    bg: "#f3f3f4",
  },
];

const COL3: Review[] = [
  {
    name: "Ibrahim Sadiq", location: "Nigeria",
    quote: "I like how transparent everything is. The rate you see is exactly what you get.",
    bg: "#126cf8", tall: true, showLogo: true,
  },
  {
    name: "Blessing Chioma", location: "Nigeria",
    quote: "This is my go-to app for selling gift cards now. Reliable and efficient every time.",
    bg: "#f3f3f4",
  },
];

function TestiCard({ card }: { card: Review }) {
  const isBlue = card.bg !== "#f3f3f4";
  return (
    <div
      className={`rounded-[20px] p-[25px] flex flex-col gap-[20px] ${card.tall ? "h-[560px] justify-between" : ""}`}
      style={{ backgroundColor: card.bg }}
    >
      {/* Top: initial circle + name */}
      <div
        className="flex items-center gap-[12px] rounded-[12px] p-[10px]"
        style={{ background: isBlue ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)" }}
      >
        <div
          className="shrink-0 size-[61px] rounded-full flex items-center justify-center font-bold text-[22px] leading-none"
          style={isBlue
            ? { background: "rgba(255,255,255,0.2)", color: "#ffffff" }
            : { background: "rgba(1,89,199,0.12)", color: "#0159c7" }
          }
        >
          {card.name.charAt(0)}
        </div>
        <div>
          <p className={`font-medium text-[18px] leading-[1.3] ${isBlue ? "text-white" : "text-[#191919]"}`}>
            {card.name}
          </p>
          <p className={`text-[14px] leading-[1.5] ${isBlue ? "text-white/70" : "text-[#525252]"}`}>
            {card.location}
          </p>
        </div>
      </div>

      {/* Stars */}
      <Stars />

      {/* Quote */}
      <p className={`font-medium text-[15px] sm:text-[16px] leading-[1.8] ${isBlue ? "text-white/90" : "text-[#525252]"}`}>
        &ldquo;{card.quote}&rdquo;
      </p>

      {/* Logo — only on tall blue cards */}
      {card.showLogo && (
        <div className="mt-auto">
          <Image src="/images/iconlogo 1.png" alt="Cardcentrals" width={33} height={33} className="object-contain" />
        </div>
      )}
    </div>
  );
}

/* ── FAQ data & component ── */
const HOME_FAQS = [
  {
    q: "How do I sell my gift card on Cardcentrals?",
    a: "Download the Cardcentrals app, create an account, and submit your gift card details to get started.",
  },
  {
    q: "How long does it take to get paid?",
    a: "Payments are processed instantly after your gift card is verified. Most transactions are completed in under 5 minutes.",
  },
  {
    q: "Is Cardcentrals safe and legit?",
    a: "Yes! Cardcentrals is a fully verified and trusted platform. All transactions are secured with encryption.",
  },
  {
    q: "What gift cards do you accept?",
    a: "We accept Amazon, iTunes, Google Play, Steam, Xbox, Walmart, and many more.",
  },
  {
    q: "Do I need to pay any fees before selling?",
    a: "No. Cardcentrals charges zero upfront fees. Our small service charge is deducted from your payout.",
  },
];

function HomeFaqItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-[12px] border border-[rgba(0,19,5,0.15)] overflow-hidden transition-colors duration-200 ${isOpen ? "bg-[#f8f8f8]" : "bg-white"}`}>
      <button
        type="button"
        className="w-full flex items-start gap-6 px-6 sm:px-8 py-5 sm:py-6 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-semibold text-[15px] sm:text-[18px] xl:text-[20px] leading-[1.4] text-[#191919]">
          {faq.q}
        </span>
        <span className={`shrink-0 mt-[3px] sm:mt-[4px] text-[#191919] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 1L8 8.5L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`faq-answer-grid${isOpen ? " open" : ""}`}>
        <div className="faq-answer-inner">
          <div className="px-6 sm:px-8 pb-5 sm:pb-6">
            <div className="border-t border-[rgba(117,117,117,0.2)] pt-4 sm:pt-5">
              <p className="font-normal text-[#525252] text-[14px] sm:text-[16px] leading-[1.6]">{faq.a}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Main HomeClient component
════════════════════════════════════════════════════════════════════ */
export default function HomeClient() {
  const statsRef   = useReveal();
  const stepsRef   = useReveal();
  const cardsRef   = useReveal();
  const testiRef   = useReveal();
  const faqRef     = useReveal();

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ════════════════ 1. HERO ════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          marginTop: -95,
          backgroundImage: "linear-gradient(-53.56deg, rgb(255,255,255) 60%, rgba(166,201,255,0.15) 100%)",
        }}
      >
        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/herobgsection.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 xl:px-[130px]">

          {/* ── Badge ── */}
          <div className="pt-[190px] sm:pt-[190px] xl:pt-[250px]">
            <div
              className="animate-fade-up inline-flex items-center gap-[8px] h-[37px] px-[16px] rounded-full border w-fit"
              style={{
                background: "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
                borderColor: "rgba(1,89,199,0.2)",
              }}
            >
              <span className="size-[8px] rounded-full bg-[#22c55e] shrink-0" />
              <span className="font-semibold text-[13px] text-[#126cf8] tracking-[0.26px]">
                Trusted by 50,000+ Users
              </span>
            </div>
          </div>

          {/* ── H1 heading (shared mobile + desktop) ── */}
          <h1
            className="animate-fade-up anim-delay-100 font-extrabold text-[#191919] uppercase leading-[0.95] tracking-[-0.02em] mt-[18px] sm:mt-[20px] xl:mt-[10px]"
            style={{ fontSize: "clamp(33px, 7.5vw, 108px)" }}
          >
            Sell Your Gift Cards
          </h1>

          {/* ── Mobile / Tablet (< xl): stacked ── */}
          <div className="xl:hidden">
            <h1
              className="animate-fade-up font-extrabold uppercase leading-[0.95] tracking-[-0.02em] bg-clip-text text-transparent text-right mt-[4px]"
              style={{
                fontSize: "clamp(33px, 7.5vw, 108px)",
                backgroundImage: "linear-gradient(90deg, #0159c7 0%, #3c8eff 100%)",
              }}
            >
              Instantly
            </h1>

            <div className="flex flex-col items-center gap-[24px] sm:gap-[28px] mt-[28px] pb-[0px] sm:pb-[0px]">
              

              {/* Description */}
              <p className="animate-fade-up anim-delay-200 font-normal text-[#525252] text-[15px] sm:text-[16px] leading-[1.8] text-center max-w-[520px]">
                Turn your unused gift cards into cash in minutes. Safe, secure, and trusted by hundreds of users.
              </p>

              {/* Feature pills */}
              <div className="animate-fade-up anim-delay-300 flex flex-wrap justify-center gap-[10px]">
                {[
                  { icon: "/icons/sli1.png", label: "Fast Payments" },
                  { icon: "/icons/sli2.png", label: "Best Market Rates" },
                  { icon: "/icons/sli3.png", label: "100% Secure Transactions" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-[6px] h-[32px] px-[10px] rounded-[12px] border border-[#e5e5e5] bg-[rgba(255,255,255,0.04)]"
                  >
                    <Image src={f.icon} alt={f.label} width={16} height={16} className="object-contain shrink-0" />
                    <span className="font-medium text-[13px] text-[#191919] whitespace-nowrap">{f.label}</span>
                  </div>
                ))}
              </div>


              {/* Download buttons */}
              <div className="animate-fade-up anim-delay-400 flex flex-wrap justify-center gap-[12px]">
                <a href="#" className="flex items-center gap-[13px] h-[54px] px-[20px] rounded-[15px] active:scale-95 transition-all duration-200" style={{ background: "#0159c7", border: "2.5px solid rgba(18,108,248,0.5)" }}>
                  <Image src="/icons/google-play.png" alt="Google Play" width={20} height={20} className="object-contain shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-[12px] text-white leading-[1.4]">Download on</span>
                    <span className="font-bold text-[16px] text-white leading-[1.3]">Google Play</span>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-[13px] h-[54px] px-[20px] rounded-[15px] border border-[#e5e5e5] bg-white active:scale-95 transition-all duration-200">
                  <Image src="/icons/apple-logo.png" alt="App Store" width={20} height={20} className="object-contain shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-[12px] text-[#191919] leading-[1.4]">Download on</span>
                    <span className="font-bold text-[16px] text-[#191919] leading-[1.3]">Apple Store</span>
                  </div>
                </a>
              </div>

              {/* Phone */}
              <div className="relative w-full max-w-[380px] sm:max-w-[460px]">
                <div className="relative w-full aspect-[585/756]">
                  <Image
                    src="/images/Hero1.png"
                    alt="Cardcentrals app"
                    fill
                    priority
                    sizes="(max-width:640px) 90vw, 460px"
                    className="object-contain"
                  />
                </div>
                {/* Card 2 — Payment Sent (tablet only) */}
                <div className="hidden sm:block absolute left-[-10px] top-[18%]">
                  <Image src="/images/Card 2.png" alt="Payment Sent" width={175} height={66} className="object-contain" />
                </div>
                {/* Card 1 — iTunes rate (tablet only) */}
                <div className="hidden sm:block absolute right-[-10px] bottom-[28%]">
                  <Image src="/images/Card 1.png" alt="iTunes rate up" width={160} height={40} className="object-contain" />
                </div>
              </div>


            </div>
          </div>

          {/* ── Desktop (xl+) ── */}
          <div className="hidden xl:block">

            {/* Row: subtitle (left 49%) + INSTANTLY (right flex-1) — same row, tight mt */}
            <div className="flex items-start gap-[40px] mt-[25px]">
              {/* Left: subtitle + pills */}
              <div className="animate-fade-up flex flex-col gap-[20px] w-[49%] shrink-0">
                <p className="font-normal text-[#525252] text-[16px] leading-[1.75]">
                  Turn your unused gift cards into cash in minutes.&nbsp; Safe, secure, and trusted by hundreds of users.
                </p>
                {/* Pills — icon box has border, no outer pill border */}
                <div className="flex flex-wrap gap-[10px]">
                  {[
                    { icon: "/icons/sli1.png", label: "Fast Payments" },
                    { icon: "/icons/sli2.png", label: "Best Market Rates" },
                    { icon: "/icons/sli3.png", label: "100% Secure Transactions" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-[5px] h-[32px]">
                      <div className="flex items-center justify-center shrink-0 size-[32px] rounded-[12px] border-[1.5px] border-[#e5e5e5] bg-[rgba(255,255,255,0.04)]">
                        <Image src={f.icon} alt="" width={16} height={16} className="object-contain" />
                      </div>
                      <span className="font-medium text-[13px] text-[#191919] whitespace-nowrap">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: INSTANTLY — blue gradient, right-aligned */}
              <div className="flex-1 flex justify-end">
                <h1
                  className="animate-fade-up font-extrabold uppercase leading-[0.95] tracking-[-0.02em] bg-clip-text text-transparent text-right"
                  style={{
                    fontSize: "clamp(33px, 7.5vw, 108px)",
                    backgroundImage: "linear-gradient(90deg, #0159c7 0%, #3c8eff 100%)",
                  }}
                >
                  Instantly
                </h1>
              </div>
            </div>

            {/* Phone section — all elements absolutely positioned, tight mt */}
            <div className="relative mt-[100px]" style={{ minHeight: 700 }}>

              {/* Phone image — at 22.9% from content left (284/1240) */}
              <div className="absolute" style={{ left: "22.9%", top: 0, width: 585, height: 756 }}>
                <Image
                  src="/images/Hero1.png"
                  alt="Cardcentrals app"
                  fill
                  priority
                  sizes="585px"
                  className="object-contain"
                />
              </div>

              {/* Card 2 — Payment Sent (44px left of phone) */}
              <div className="absolute" style={{ left: "calc(22.9% - 44px)", top: 127 }}>
                <Image src="/images/Card 2.png" alt="Payment Sent" width={191} height={72} className="object-contain" />
              </div>

              {/* Card 1 — iTunes rate (362px right of phone left edge) */}
              <div className="absolute" style={{ left: "calc(22.9% + 362px)", top: 399 }}>
                <Image src="/images/Card 1.png" alt="iTunes rate up" width={175} height={44} className="object-contain" />
              </div>

              {/* Description + download buttons — right side, aligned with phone top */}
              <div className="animate-fade-up absolute right-0 top-0 flex flex-col gap-[24px]" style={{ width: "33%" }}>
                <p className="font-medium text-[#525252] text-[16px] leading-[1.7]">
                  Turn your gift cards into instant cash at unbeatable rates.{" "}
                  Download the Cardcentrals app and start earning now.
                </p>
                <div className="flex gap-[13px]">
                  <a href="#" className="flex items-center gap-[13px] h-[54px] px-[18px] rounded-[15px] active:scale-95 transition-all duration-200" style={{ background: "#0159c7", border: "2.5px solid rgba(18,108,248,0.5)" }}>
                    <Image src="/icons/google-play.png" alt="Google Play" width={20} height={20} className="object-contain shrink-0" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-[12px] text-white leading-[1.4]">Download on</span>
                      <span className="font-bold text-[15px] text-white leading-[1.3]">Google Play</span>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-[13px] h-[54px] px-[18px] rounded-[15px] border border-[#e5e5e5] bg-white active:scale-95 transition-all duration-200">
                    <Image src="/icons/apple-logo.png" alt="App Store" width={20} height={20} className="object-contain shrink-0" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-[12px] text-[#191919] leading-[1.4]">Download on</span>
                      <span className="font-bold text-[15px] text-[#191919] leading-[1.3]">Apple Store</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ════════════════ 2. STATS ════════════════ */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[40px] sm:py-[50px] xl:py-[60px]">
        <div
          ref={statsRef.ref}
          className={`reveal${statsRef.visible ? " visible" : ""} max-w-[1240px] mx-auto rounded-[24px] px-[30px] sm:px-[50px] xl:px-[130px] py-[40px] sm:py-[50px] flex flex-col sm:flex-row items-center justify-center gap-[40px] sm:gap-[60px] xl:gap-[80px]`}
          style={{
            backgroundImage: "linear-gradient(141.94deg, rgb(18,108,248) 0%, rgb(1,89,199) 100%)",
            boxShadow: "0px 25px 45px 0px rgba(166,201,255,0.3)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-[24px]">
              <div
                className="shrink-0 size-[64px] rounded-[16px] flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.2)" }}
              >
                <Image src={s.icon} alt={s.label} width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-white text-[42px] sm:text-[48px] leading-[1.2] tracking-[-0.03em]">{s.value}</p>
                <p className="font-bold text-white text-[16px] leading-[1.6]">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ 3. HOW IT WORKS ════════════════ */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[60px] sm:py-[80px] xl:py-[100px]">
        <div
          ref={stepsRef.ref}
          className={`reveal${stepsRef.visible ? " visible" : ""} max-w-[1240px] mx-auto`}
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-[18px] mb-[50px] sm:mb-[60px]">
            <Badge text="HOW IT WORKS" />
            <h2
              className="font-extrabold text-[#191919] tracking-[-0.02em] leading-[1.15]"
              style={{ fontSize: "clamp(26px, 4vw, 50px)" }}
            >
              Sell Your Gift Cards in 3 Simple Steps
            </h2>
            <p className="font-normal text-[#525252] text-[15px] sm:text-[16px] leading-[1.7] max-w-[600px]">
              Getting paid for your gift cards has never been easier. With Cardcentrals, you can complete the entire process in just a few steps — fast, secure, and hassle-free.
            </p>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] xl:gap-[38px]">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="relative rounded-[20px] border-2 border-[#e5e5e5] bg-white overflow-hidden h-[380px] sm:h-[420px] xl:h-[439px]"
              >
                {/* Bottom blue gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[177px] pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, rgba(18,108,248,0) 0%, rgba(18,108,248,0.2) 100%)" }}
                />

                {/* Text */}
                <div className="absolute top-[8%] left-[13%] right-[14%] flex flex-col gap-[12px] items-center text-center z-10">
                  <h3 className="font-semibold text-[#191919] text-[20px] leading-[30px]">{step.title}</h3>
                  <p className="font-normal text-[#525252] text-[14px] leading-[1.7]">{step.desc}</p>
                </div>

                {/* Phone screenshot */}
                <div className="absolute bottom-0 left-[28px] right-[28px] h-[68%] overflow-hidden">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    sizes="(max-width:768px) 90vw, 388px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ 4. GIFT CARDS ════════════════ */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[60px] sm:py-[80px] xl:py-[100px] overflow-hidden">
        <div
          ref={cardsRef.ref}
          className={`reveal${cardsRef.visible ? " visible" : ""} max-w-[1240px] mx-auto`}
        >
          {/* Desktop: center text with floating cards */}
          <div className="hidden xl:flex items-center justify-center relative min-h-[520px]">
            {/* Center text */}
            <div className="flex flex-col items-center text-center gap-[24px] max-w-[520px] z-10 relative">
              <Badge text="SUPPORTED GIFT CARDS" />
              <h2 className="font-bold text-[#191919] text-[48px] leading-[1.2] tracking-[-0.03em]">
                We Accept a Wide Range of Gift Cards
              </h2>
              <p className="font-medium text-[#525252] text-[18px] leading-[1.8]">
                Trade your gift cards with confidence. Cardcentrals supports a variety of popular and high-demand gift cards at competitive rates.
              </p>
            </div>

            {/* Left floating cards */}
            <div className="absolute left-0 top-[45%] -translate-y-1/2">
              <CardIcon image="/icons/googlecard.png" alt="Google Play" />
            </div>
            <div className="absolute left-[125px] top-[8%]">
              <CardIcon image="/icons/streamcard.png" alt="Steam" />
            </div>
            <div className="absolute left-[125px] bottom-[8%]">
              <CardIcon image="/icons/amazoncard.png" alt="Amazon" />
            </div>

            {/* Right floating cards */}
            <div className="absolute right-0 top-[45%] -translate-y-1/2">
              <CardIcon image="/icons/walmartcard.png" alt="Walmart" />
            </div>
            <div className="absolute right-[125px] top-[8%]">
              <CardIcon image="/icons/itunecard.png" alt="iTunes" />
            </div>
            <div className="absolute right-[125px] bottom-[8%]">
              <CardIcon image="/icons/xboxcard.png" alt="Xbox" />
            </div>
          </div>

          {/* Mobile / Tablet: stacked */}
          <div className="flex xl:hidden flex-col items-center gap-[40px]">
            <div className="flex flex-col items-center text-center gap-[18px] max-w-[520px]">
              <Badge text="SUPPORTED GIFT CARDS" />
              <h2
                className="font-bold text-[#191919] leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: "clamp(24px, 5vw, 42px)" }}
              >
                We Accept a Wide Range of Gift Cards
              </h2>
              <p className="font-medium text-[#525252] text-[15px] sm:text-[16px] leading-[1.8]">
                Trade your gift cards with confidence. Cardcentrals supports a variety of popular and high-demand gift cards at competitive rates.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-[12px] sm:gap-[16px]">
              {GIFTCARDS.map((c) => (
                <CardIcon key={c.alt} image={c.image} alt={c.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ 5. TESTIMONIALS ════════════════ */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[60px] sm:py-[80px] xl:py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div
            ref={testiRef.ref}
            className={`reveal${testiRef.visible ? " visible" : ""} flex flex-col items-center text-center gap-[18px] mb-[50px] sm:mb-[60px]`}
          >
            <Badge text="TESTIMONIALS" />
            <h2
              className="font-extrabold text-[#191919] tracking-[-0.02em] leading-[1.15]"
              style={{ fontSize: "clamp(26px, 4vw, 50px)" }}
            >
              What Our Users Are Saying
            </h2>
            <p className="font-normal text-[#525252] text-[15px] sm:text-[16px] leading-[1.7] max-w-[500px]">
              Hear from our users who trust Cardcentrals for fast, secure, and reliable gift card transactions.
            </p>
          </div>

          {/* Desktop 3-col */}
          <div className="hidden xl:grid grid-cols-3 gap-[24px] items-start">
            <div className="flex flex-col gap-[24px]">
              {COL1.map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
            <div className="flex flex-col gap-[24px]">
              {COL2.map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
            <div className="flex flex-col gap-[24px]">
              {COL3.map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
          </div>

          {/* Tablet 2-col */}
          <div className="hidden sm:grid xl:hidden grid-cols-2 gap-[20px] items-start">
            <div className="flex flex-col gap-[20px]">
              {[...COL1, COL3[1]].map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
            <div className="flex flex-col gap-[20px]">
              {[...COL2, COL3[0]].map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
          </div>

          {/* Mobile 1-col */}
          <div className="flex sm:hidden flex-col gap-[16px]">
            {[...COL1, ...COL2, ...COL3].map((c) => <TestiCard key={c.name} card={c} />)}
          </div>
        </div>
      </section>

      {/* ════════════════ 6. FAQ ════════════════ */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[60px] sm:py-[80px] xl:py-[100px]">
        <div
          ref={faqRef.ref}
          className={`reveal${faqRef.visible ? " visible" : ""} max-w-[1240px] mx-auto grid grid-cols-1 xl:grid-cols-[608fr_632fr] gap-[50px] xl:gap-[80px] items-start`}
        >
          {/* Left — heading + Still Have Questions card */}
          <div className="flex flex-col gap-[18px] sm:gap-[22px]">
            <Badge text="FAQs" />
            <h2
              className="font-extrabold text-[#191919] tracking-[-0.02em] leading-[1.2]"
              style={{ fontSize: "clamp(32px, 4vw, 50px)" }}
            >
              Frequently Asked
              <br />Questions
            </h2>
            <p className="font-normal text-[#525252] text-[15px] sm:text-[16px] leading-[1.7]">
              Got questions about how Cardcentrals works? We&apos;ve answered the most common
              questions to help you understand our platform, process, and how to get started
              quickly and safely.
            </p>

            {/* Still Have Questions? blue card */}
            <div
              className="rounded-[25px] p-[39px] flex flex-col gap-[14px] mt-[6px]"
              style={{
                background: "#0159c7",
                border: "2.5px solid rgba(18,108,248,0.5)",
              }}
            >
              <h3 className="font-bold text-white text-[24px] leading-[1.275]">
                Still Have Questions?
              </h3>
              <p className="font-normal text-[rgba(255,255,255,0.8)] text-[16px] leading-[1.7]">
                Can&apos;t find the answer you&apos;re looking for? Our support team is always
                ready to help you. Reach out to us anytime and we&apos;ll respond as quickly
                as possible.
              </p>
              <div className="flex flex-wrap gap-[14px] mt-[4px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-[45px] px-[20px] rounded-[10px] border-2 border-[#e5e5e5] bg-white text-[#191919] font-bold text-[14px] hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  Contact Us
                </Link>
                <Link
                  href="https://wa.me/2348108993922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[45px] px-[20px] rounded-[10px] border-2 border-[#e5e5e5] bg-white text-[#191919] font-bold text-[14px] hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-[10px]">
            {HOME_FAQS.map((faq, i) => (
              <HomeFaqItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Gift card icon tile ── */
function CardIcon({ image, alt }: { image: string; alt: string }) {
  return (
    <Image src={image} alt={alt} width={130} height={130} className="object-contain" priority />
  );
}
