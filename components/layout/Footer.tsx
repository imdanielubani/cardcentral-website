import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { SITE } from "@/lib/site";

/* ─── data ─────────────────────────────────────────────────────────────────── */

const QUICK_LINKS = [
  { label: "Home",     href: ROUTES.HOME    },
  { label: "About Us", href: ROUTES.ABOUT   },
  { label: "Rate",     href: ROUTES.RATES   },
  { label: "Blogs",    href: ROUTES.BLOG    },
  { label: "Contact Us",         href: ROUTES.CONTACT },
] as const;

const INFO_LINKS = [
  { label: "FAQs",               href: ROUTES.FAQ     },
  { label: "Help Center",        href: "#"            },
  { label: "Privacy Policy",     href: ROUTES.PRIVACY },
  { label: "Terms & Conditions", href: ROUTES.TERMS   },
  { label: "Download",           href: ROUTES.DOWNLOAD },
] as const;

const SOCIAL_LINKS = [
  { label: "Facebook",  href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter",   href: "#" },
  { label: "WhatsApp",  href: "#" },
] as const;

function ArrowIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="pointer-events-none shrink-0"
      style={{ width: 20, height: 20, objectFit: "contain" }}
    />
  );
}

const linkCls =
  "font-medium text-[14px] leading-[20.3px] text-white hover:text-[#126cf8] transition-colors duration-150";

const headingCls =
  "font-bold text-[20px] leading-[22.4px] text-white tracking-[-0.32px]";

/* ─── component ────────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="px-4 sm:px-5 pb-4 sm:pb-5">

        <div className="relative bg-[#191919] rounded-[25px] overflow-hidden">

          {/* Background decoration — opacity-10 as per Figma */}
          <div className="absolute inset-0 overflow-hidden opacity-100 pointer-events-none">
            <img
              alt=""
              src="/images/shapeimagefooter.png"
              style={{
                position: "absolute",
                width: "109.17%",
                height: "179.19%",
                left: "-6.47%",
                top: "-79.27%",
                maxWidth: "none",
              }}
            />
          </div>

          {/* ── Main content ─────────────────────────────────────────────────
              Mobile:  flex-col, single column
              Tablet:  flex-col with 2-col link grid
              Desktop: flex-row, matches Figma x/y values via xl: classes    */}
          <div className="relative flex flex-col xl:flex-row gap-10 xl:gap-0 px-6 sm:px-8 xl:px-[80px] pt-10 xl:pt-[89px] pb-10 xl:pb-[96px]">

            {/* ── Left column: logo + tagline + contact ─────────────────── */}
            <div className="flex flex-col gap-[22px] xl:w-[345px] xl:shrink-0">

              <div className="flex flex-col gap-[17.2px] px-[3px] py-[5px]">
                {/* Logo */}
                <div className="relative shrink-0" style={{ width: 163, height: 32.781 }}>
                  <Image
                    src="/images/logo-white.png"
                    alt="Cardcentrals"
                    fill
                    sizes="163px"
                    className="object-contain object-left pointer-events-none"
                  />
                </div>

                <p className="font-medium text-[16px] leading-[27.2px] text-white max-w-[320px]">
                  Fast, secure, and reliable gift card exchange platform.
                </p>
              </div>

              {/* Contact buttons */}
              <div className="flex flex-col gap-[12px] w-full sm:max-w-[345px]">

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center justify-center gap-[3.86px] overflow-hidden
                             w-full bg-[#0159c7] rounded-[15px]
                             hover:opacity-90 transition-opacity"
                  style={{
                    border: "5px solid rgba(18,108,248,0.5)",
                    paddingTop: 6.857,
                    paddingBottom: 6.862,
                    paddingLeft: 20,
                    paddingRight: 16,
                  }}
                >
                  <span className="font-semibold text-[14px] sm:text-[15px] leading-none text-white whitespace-nowrap ">
                    {SITE.email}
                  </span>
                  <ArrowIcon src="/icons/arrowup.png" />
                </a>

                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-[3.85px] overflow-hidden
                             w-full bg-white border-5 border-[#e5e5e5] rounded-[15px]
                             hover:opacity-80 transition-opacity"
                  style={{
                    paddingTop: 6.857,
                    paddingBottom: 6.862,
                    paddingLeft: 32,
                    paddingRight: 28,
                  }}
                >
                  <span className="font-semibold text-[14px] sm:text-[15px] leading-none text-[#191919] whitespace-nowrap opacity-70">
                    {SITE.phoneDisplay}
                  </span>
                  <ArrowIcon src="/icons/arrowups.png" />
                </a>

              </div>
            </div>

            {/* ── Right columns: link groups ───────────────────────────────
                Mobile:  2-column grid
                Tablet:  4-column grid (md)
                Desktop: flex row with Figma gap-[100px] + ml-[109px]       */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 xl:flex xl:gap-[120px] xl:ml-[109px]">

              {/* Quick Link */}
              <div className="flex flex-col gap-[24px] items-start">
                <h6 className={headingCls}>Quick Link</h6>
                <ul className="flex flex-col gap-[9px] list-none m-0 p-0">
                  {QUICK_LINKS.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className={linkCls}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Information */}
              <div className="flex flex-col gap-[24px] items-start">
                <h6 className={headingCls}>Information</h6>
                <ul className="flex flex-col gap-[9px] list-none m-0 p-0">
                  {INFO_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className={linkCls}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-[24px] items-start">
                <h6 className={headingCls}>Follow Us</h6>
                <ul className="flex flex-col gap-[9px] list-none m-0 p-0">
                  {SOCIAL_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className={linkCls}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Our App — spans full width on mobile so buttons have room */}
              <div className="flex flex-col gap-[28px] items-start col-span-2 md:col-span-1 xl:w-[177px] xl:shrink-0">
                <h6 className={headingCls}>Download Our App</h6>

                <div className="flex flex-col gap-[10px] w-full max-w-[180px] xl:max-w-none xl:w-full">

                  {/* Google Play */}
                  <a
                    href="#"
                    className="relative flex items-center w-full bg-[#0159c7] rounded-[15px] hover:opacity-90 transition-opacity shrink-0"
                    style={{ height: 60, border: "5px solid rgba(18,108,248,0.5)" }}
                  >
                    <div className="absolute size-[20px]" style={{ left: 22.5, top: 17 }}>
                      <Image
                        src="/icons/google-play.png"
                        alt=""
                        fill
                        sizes="20px"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="absolute flex flex-col items-start" style={{ left: 55.5, top: 7 }}>
                      <p className="font-medium text-[12px] leading-[18px] text-white whitespace-nowrap">
                        Download on
                      </p>
                      <p className="font-bold text-[16px] leading-[18px] text-white whitespace-nowrap">
                        Google Play
                      </p>
                    </div>
                  </a>

                  {/* Apple Play */}
                  <a
                    href="#"
                    className="relative flex items-center w-full bg-white border-[5px] border-[#e5e5e5] rounded-[15px] hover:bg-gray-50 transition-colors shrink-0"
                    style={{ height: 60 }}
                  >
                    <div
                      className="absolute flex gap-[13px] items-center"
                      style={{ left: 30, top: 5 }}
                    >
                      <div className="relative shrink-0 size-[20px]">
                        <Image
                          src="/icons/apple-logo.png"
                          alt="Apple"
                          fill
                          sizes="20px"
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="font-medium text-[12px] leading-[18px] text-[#191919] whitespace-nowrap">
                          Download on
                        </p>
                        <p className="font-bold text-[16px] leading-[18px] text-[#191919] whitespace-nowrap">
                          Apple Play
                        </p>
                      </div>
                    </div>
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* ── Horizontal border ──────────────────────────────────────────── */}
          <div className="mx-5 xl:mx-[83px] border-t border-[rgba(251,249,243,0.12)]" />

          {/* ── Copyright ──────────────────────────────────────────────────── */}
          <div className="flex justify-center px-4 py-5 xl:py-[30px]">
            <p className="font-bold text-[13px] sm:text-[14px] leading-[15.95px] text-[rgba(255,255,255,0.7)] text-center">
              {"© 2026 "}
              <span className="text-white">Cardcentrals</span>
              {". All right reserved. Built by "}
              <span className="text-white">Imdanielubani</span>
              {"."}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
