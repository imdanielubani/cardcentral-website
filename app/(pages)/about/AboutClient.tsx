"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ── scroll-reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Stars component ── */
function Stars({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex gap-[4px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="relative size-[28px] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill={dark ? "#FFB545" : "#FFB545"}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ── data ── */
const STATS = [
  { value: "10k+", label: "Happy Users",     icon: "/icons/happyusers.png" },
  { value: "20k+", label: "Total Downloads", icon: "/icons/downloads.png"  },
  { value: "4.9",  label: "User Rating",     icon: "/icons/userrating.png" },
];

const MISSION = [
  {
    icon:  "/icons/Fire.png",
    title: "Our Commitment",
    body:  "We are committed to building a platform that users can rely on every time.",
    blue:  false,
  },
  {
    icon:  "/icons/Airplane.png",
    title: "Our mission",
    body:  "To provide a fast, secure, and trusted platform where users can sell gift cards effortlessly and get paid instantly.",
    blue:  true,
  },
  {
    icon:  "/icons/Target.png",
    title: "Our vision",
    body:  "To become one of the most trusted gift card exchange platforms, known for speed, transparency, and user satisfaction.",
    blue:  false,
  },
];

/* ── Testimonial card ── */
interface ReviewCard {
  name: string;
  location: string;
  quote: string;
  bg: string;
  tall?: boolean;
  showLogo?: boolean;
}

function TestiCard({ card }: { card: ReviewCard }) {
  const isBlue = card.bg !== "#f3f3f4";
  return (
    <div
      className={`rounded-[20px] p-[25px] flex flex-col gap-[20px] ${card.tall ? "h-[560px] justify-between" : ""}`}
      style={{ backgroundColor: card.bg }}
    >
      {/* Top: avatar + name */}
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
      <Stars dark={!isBlue} />

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

const COL1: ReviewCard[] = [
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

const COL2: ReviewCard[] = [
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

const COL3: ReviewCard[] = [
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

export default function AboutClient() {
  const whoWeAre    = useReveal();
  const statsRow    = useReveal();
  const missionSec  = useReveal();
  const mockupSec   = useReveal();
  const testiHead   = useReveal();

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          marginTop: -95,
          backgroundImage:
            "linear-gradient(-32.42deg, rgb(255,255,255) 60%, rgba(166,201,255,0.15) 100%)",
        }}
      >
        {/* Dot-grid overlay — identical to all other pages */}
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

        <div className="relative flex flex-col items-center text-center px-5 pt-[190px] sm:pt-[150px] md:pt-[170px] xl:pt-[250px] pb-[80px] sm:pb-[100px] xl:pb-[120px] gap-[14px] sm:gap-[18px]">

          {/* ABOUT US badge */}
          <div
            className="animate-fade-up flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
            style={{
              background: "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
              borderColor: "rgba(1,89,199,0.2)",
            }}
          >
            <span className="font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px] leading-[19.5px]">
              ABOUT US
            </span>
          </div>

          {/* H1 */}
          <h1 className="animate-fade-up anim-delay-100 font-extrabold text-[#191919] text-[28px] sm:text-[42px] md:text-[52px] xl:text-[60px] leading-[1.1]">
            About Cardcentrals
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up anim-delay-200 font-medium text-[#525252] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[600px] xl:max-w-[790px]"
            style={{ lineHeight: "1.7" }}
          >
            Cardcentrals is a secure and user-friendly platform that allows you to easily
            convert your gift cards into cash. We are committed to providing fast payments,
            transparent rates, and a smooth trading experience through our mobile app.
          </p>
        </div>
      </section>

      {/* ── 2. Who We Are ─────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[60px] sm:py-[80px] xl:py-[100px]">
        <div
          ref={whoWeAre.ref}
          className={`reveal${whoWeAre.visible ? " visible" : ""} max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 items-center`}
        >
          {/* Text — below image on mobile, left on desktop */}
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <h2 className="font-bold text-[#191919] text-[26px] sm:text-[34px] xl:text-[42px] leading-[1.2]">
              Who We Are
            </h2>
            <p className="font-medium text-[#525252] text-[15px] sm:text-[16px] leading-[1.85]">
              Cardcentrals is a fast-growing digital platform that helps Nigerians convert
              their gift cards into cash. We are committed to providing simple, secure, and
              reliable ways for individuals to trade gift cards as easily as possible.
            </p>
            <p className="font-medium text-[#525252] text-[15px] sm:text-[16px] leading-[1.85]">
              Our goal is to remove the complications and make the experience faster, easier,
              and stress-free through our mobile app.
            </p>
          </div>

          {/* Phone image */}
          <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[25px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] order-1 md:order-2">
            <Image
              src="/images/aboutphone.jpg"
              alt="Cardcentrals mobile app on phones"
              fill
              sizes="(max-width:768px) 100vw, 650px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 3. Stats ──────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[40px] sm:py-[50px] xl:py-[60px]">
        <div
          ref={statsRow.ref}
          className={`reveal${statsRow.visible ? " visible" : ""} max-w-[1240px] mx-auto rounded-[24px] px-[30px] sm:px-[50px] xl:px-[130px] py-[40px] sm:py-[50px] flex flex-col sm:flex-row items-center justify-center gap-[40px] sm:gap-[60px] xl:gap-[80px]`}
          style={{
            backgroundImage: "linear-gradient(141.94deg, rgb(18,108,248) 0%, rgb(1,89,199) 100%)",
            boxShadow: "0px 25px 45px 0px rgba(166,201,255,0.3)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-[24px]">
              <div
                className="shrink-0 size-[64px] rounded-[16px] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                <Image src={s.icon} alt={s.label} width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-white text-[42px] sm:text-[48px] leading-[1.2] tracking-[-0.03em]">
                  {s.value}
                </p>
                <p className="font-bold text-white text-[16px] leading-[1.6]">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Mission Cards ──────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[60px] sm:py-[80px]">
        <div
          ref={missionSec.ref}
          className={`reveal${missionSec.visible ? " visible" : ""} max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-6`}
        >
          {MISSION.map((card) => (
            <div
              key={card.title}
              className={`rounded-[20px] p-8 xl:p-10 flex flex-col gap-5 ${
                card.blue ? "bg-[#0159c7]" : "bg-white border border-[#ebebeb]"
              }`}
              style={{
                boxShadow: card.blue
                  ? "0 20px 60px -10px rgba(1,89,199,0.35)"
                  : "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="size-[65px] rounded-[15px] flex items-center justify-center"
                style={{
                  background: card.blue
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(1,89,199,0.08)",
                }}
              >
                <Image src={card.icon} alt={card.title} width={37} height={37} className="object-contain" />
              </div>
              <h3
                className={`font-bold text-[20px] sm:text-[22px] leading-[1.3] ${
                  card.blue ? "text-white" : "text-[#191919]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`font-medium text-[15px] sm:text-[16px] leading-[1.8] ${
                  card.blue ? "text-white/80" : "text-[#525252]"
                }`}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. App Mockup ─────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 xl:px-[100px] pb-[60px] sm:pb-[80px]">
        <div
          ref={mockupSec.ref}
          className={`reveal${mockupSec.visible ? " visible" : ""} max-w-[1240px] mx-auto rounded-[20px] sm:rounded-[25px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)]`}
        >
          <div className="relative w-full aspect-[1230/923]">
            <Image
              src="/images/aboutphonemockup.jpg"
              alt="Cardcentrals app screens"
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 90vw, 1240px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 6. Testimonials ───────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 xl:px-[100px] py-[60px] sm:py-[80px] xl:py-[100px]">
        <div className="max-w-[1240px] mx-auto">

          {/* Section header */}
          <div
            ref={testiHead.ref}
            className={`reveal${testiHead.visible ? " visible" : ""} flex flex-col items-center text-center mb-[50px] sm:mb-[60px] gap-[14px]`}
          >
            <div
              className="inline-flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
              style={{
                background: "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
                borderColor: "rgba(1,89,199,0.2)",
              }}
            >
              <span className="font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px]">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="font-extrabold text-[#191919] text-[26px] sm:text-[36px] xl:text-[42px] leading-[1.2]">
              What Our Users Are Saying
            </h2>
            <p className="font-medium text-[#525252] text-[15px] sm:text-[16px] max-w-[500px] leading-[1.7]">
              Selling your gift cards has never been easier. Get paid instantly with the best
              rates on all transactions.
            </p>
          </div>

          {/* Desktop: exact 3-column grid | Mobile: single column */}
          <div className="hidden xl:grid grid-cols-3 gap-[24px] items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-[24px]">
              {COL1.map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-[24px]">
              {COL2.map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-[24px]">
              {COL3.map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden sm:grid xl:hidden grid-cols-2 gap-[20px] items-start">
            <div className="flex flex-col gap-[20px]">
              {[...COL1, COL3[1]].map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
            <div className="flex flex-col gap-[20px]">
              {[...COL2, COL3[0]].map((c) => <TestiCard key={c.name} card={c} />)}
            </div>
          </div>

          {/* Mobile: single column */}
          <div className="flex sm:hidden flex-col gap-[16px]">
            {[...COL1, ...COL2, ...COL3].map((c) => <TestiCard key={c.name} card={c} />)}
          </div>
        </div>
      </section>
    </>
  );
}
