"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";

// Nav links exactly as shown in Figma node 349:2073 "Nav - Menu Items"
const NAV_LINKS = [
  { label: "Home",       href: ROUTES.HOME    },
  { label: "About Us",   href: ROUTES.ABOUT   },
  { label: "Rate",       href: ROUTES.RATES   },
  { label: "Blogs",      href: ROUTES.BLOG    },
  { label: "Contact Us", href: ROUTES.CONTACT },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    /*
     * Figma 349:2068 — outer wrapper: flex items-end justify-center, sticky top-0
     * pointer-events-none on the gap so it doesn't block page interactions
     */
    <header
      className="sticky top-0 z-50 w-full flex justify-center pointer-events-none bg-white"
      style={{ paddingTop: 30 }}
    >
      {/*
       * Figma 349:2069 — Container: w-[1240px]
       * Re-enable pointer events for the actual bar
       */}
      <div className="w-full max-w-[1240px] px-5 pointer-events-auto">

        {/*
         * Figma 349:2070 — Header - Nav Bar - Desktop
         * bg-[#191919]  p-[10px]  rounded-[15px]
         * shadow-[0px_8px_34px_-2px_rgba(0,0,0,0.35)]  overflow-clip
         */}
        <nav
          aria-label="Main navigation"
          className="
            bg-[#191919] overflow-hidden rounded-[15px]
            shadow-[0px_8px_34px_-2px_rgba(0,0,0,0.35)]
            p-[10px]
          "
        >
          {/* Figma 349:2071 — Nav Bar Content: flex items-center justify-between */}
          <div className="flex items-center justify-between">

            {/* Figma 349:2072 — logo 1: w-[199px] h-[40px] */}
            <Link href={ROUTES.HOME} className="block flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Cardcentrals"
                width={199}
                height={40}
                priority
                className="object-contain object-left"
                style={{ width: 199, height: 40 }}
              />
            </Link>

            {/*
             * Figma 349:2073 — Nav - Menu Items
             * flex  gap-[25px]  items-center  justify-center  overflow-clip  shrink-0
             * Each link: Manrope SemiBold  16px  leading-[24px]  text-white  whitespace-nowrap
             */}
            <ul className="hidden lg:flex items-center justify-center gap-[25px] overflow-hidden flex-shrink-0 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`
                        font-semibold text-[14px] leading-[24px] whitespace-nowrap
                        transition-colors duration-150
                        ${active ? "text-[#126cf8]" : "text-white hover:text-[#126cf8]"}
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/*
             * Figma 349:2089-2093 — CTA container w-[147px]
             * Button: bg-white  h-[45px]  w-full  rounded-[10px]
             * Text:   Manrope Bold  14px  leading-[22.4px]  #191919  "Download App"
             * Text position in Figma: left-[25px] top-[11px] h-[23px] w-[97px]
             */}
            <div className="hidden lg:block flex-shrink-0" style={{ width: 147 }}>
              <Link
                href="/download"
                className="
                  flex items-center
                  bg-white rounded-[10px]
                  hover:bg-gray-100 transition-colors
                  w-full h-[45px]
                "
                style={{ paddingLeft: 25 }}
              >
                <span className="font-bold text-[14px] leading-[22.4px] text-[#191919] whitespace-nowrap">
                  Download App
                </span>
              </Link>
            </div>

            {/* Hamburger — mobile only, not in Figma desktop design */}
            <button
              className="
                lg:hidden flex flex-col justify-center items-center
                w-[40px] h-[40px] gap-[5px] flex-shrink-0
                rounded-[8px] hover:bg-white/10 transition-colors
              "
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className={`block h-[2px] w-[22px] bg-white rounded transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] w-[22px] bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[2px] w-[22px] bg-white rounded transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>

          </div>
        </nav>

        {/* Mobile dropdown — same dark theme as nav bar */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 bg-[#191919] rounded-[15px] shadow-[0px_8px_34px_-2px_rgba(0,0,0,0.35)] overflow-hidden">
            <ul className="flex flex-col list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <li key={href} className="border-b border-white/[0.08] last:border-none">
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        block px-6 py-4
                        font-semibold text-[16px] leading-[24px]
                        transition-colors duration-150
                        ${active ? "text-[#126cf8]" : "text-white hover:text-[#126cf8]"}
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="p-4">
                <Link
                  href="/download"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex items-center justify-center
                    bg-white text-[#191919]
                    font-bold text-[14px] leading-[22.4px]
                    rounded-[10px] h-[45px] w-full
                    hover:bg-gray-100 transition-colors
                  "
                >
                  Download App
                </Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </header>
  );
}
