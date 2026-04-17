import Image from "next/image";

export default function CallToAction() {
  return (
    /* Section: larger side padding on desktop so card lands at ~1240px wide (matching nav width) */
    <section className="w-full px-4 sm:px-5 xl:px-[100px] pb-4 sm:pb-25">

      {/* Card: dark, rounded, overflow-hidden, fixed 446px height on desktop */}
      <div className="relative bg-[#191919] rounded-[32px] overflow-hidden xl:h-[446px]">

        {/* Background shape decoration — opacity-50 */}
        <div
          className="absolute overflow-hidden opacity-100 pointer-events-none"
          style={{ left: 80, top: -13, width: 1113, height: 459 }}
        >
          <img
            alt=""
            src="/images/Shape Image.png"
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

        {/* ── Desktop layout (xl+) — exact Figma coordinates ── */}
        <div className="hidden xl:block absolute inset-0">

          {/* CTA Content: left-[91px] top-[95px] */}
          <div className="absolute flex flex-col gap-[12px] items-start" style={{ left: 91, top: 95 }}>

            {/* Heading */}
            <div className="flex flex-col" style={{ fontSize: 48, lineHeight: "58px" }}>
              <span className="font-bold text-white whitespace-nowrap">
                Stop Letting Your Gift Cards
              </span>
              <span
                className="font-bold text-[#126cf8] underline decoration-[#126cf8] decoration-solid whitespace-nowrap"
                style={{ textDecorationThickness: "11%" }}
              >
                Go to Waste
              </span>
            </div>

            {/* Description */}
            <p
              className="font-medium text-white"
              style={{ fontSize: 16, lineHeight: "27.2px", width: 491 }}
            >
              Convert them to cash instantly with the best rates and lightning-fast
              payments&nbsp; on all from your phone.
            </p>

            {/* Download buttons */}
            <div className="flex" style={{ gap: 12 }}>

              {/* Google Play */}
              <a
                href="#"
                className="relative flex items-center bg-[#0159c7] rounded-[15px] hover:opacity-90 transition-opacity shrink-0"
                style={{
                  width: 176.86,
                  height: 60,
                  border: "5px solid rgba(18,108,248,0.5)",
                }}
              >
                <div className="absolute size-[20px]" style={{ left: 22.5, top: 16 }}>
                  <Image src="/icons/google-play.png" alt="" fill sizes="20px" className="object-contain" priority />
                </div>
                <div className="absolute flex flex-col items-start" style={{ left: 55.5, top: 5 }}>
                  <p className="font-medium text-[12px] leading-[20px] text-white whitespace-nowrap">Download on</p>
                  <p className="font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="relative flex items-center bg-white border-[1.5px] border-[#e5e5e5] rounded-[15px] hover:bg-gray-50 transition-colors shrink-0"
                style={{ width: 176.86, height: 60, border: "5px solid #e5e5e5", }}
              >
                <div
                  className="absolute flex gap-[13px] items-center"
                  style={{ left: 23.64, top: "50%", transform: "translateY(-50%)" }}
                >
                  <div className="relative shrink-0 size-[20px]">
                    <Image src="/icons/apple-logo.png" alt="Apple" fill sizes="20px" className="object-contain" priority />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-medium text-[12px] leading-[20px] text-[#191919] whitespace-nowrap">Download on</p>
                    <p className="font-bold text-[16px] leading-[20px] text-[#191919] whitespace-nowrap">Apple Play</p>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Phone mockup: left-[806px] top-[42px] w-[333px] h-[404px] */}
          <div
            className="absolute pointer-events-none"
            style={{ left: 900, top: 42, width: 333, height: 404 }}
          >
            <img
              alt="Cardcentrals app on phone"
              src="/images/calltoaction.png"
              style={{ width: 333, height: 404, display: "block" }}
            />
          </div>
        </div>

        {/* ── Mobile / tablet layout (below xl) ── */}
        <div className="xl:hidden flex flex-col gap-6 px-6 sm:px-10 pt-10 pb-10">

          <div className="flex flex-col">
            <span className="font-bold text-white text-[32px] sm:text-[40px] leading-tight">
              Stop Letting Your Gift Cards
            </span>
            <span
              className="font-bold text-[#126cf8] text-[32px] sm:text-[40px] leading-tight underline decoration-[#126cf8] decoration-solid"
              style={{ textDecorationThickness: "11%" }}
            >
              Go to Waste
            </span>
          </div>

          <p className="font-medium text-[16px] leading-[27.2px] text-white max-w-[491px]">
            Convert them to cash instantly with the best rates and lightning-fast
            payments&nbsp; on all from your phone.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="relative flex items-center bg-[#0159c7] rounded-[15px] hover:opacity-90 transition-opacity"
              style={{
                width: 176.86,
                height: 53.59,
                border: "5px solid rgba(18,108,248,0.5)",
              }}
            >
              <div className="absolute size-[20px]" style={{ left: 22.5, top: 16 }}>
                <Image src="/icons/google-play.png" alt="" fill sizes="20px" className="object-contain" />
              </div>
              <div className="absolute flex flex-col items-start" style={{ left: 55.5, top: 5 }}>
                <p className="font-medium text-[12px] leading-[20px] text-white whitespace-nowrap">Download on</p>
                <p className="font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">Google Play</p>
              </div>
            </a>
            <a
              href="#"
              className="relative flex items-center bg-white border-[1.5px] border-[#e5e5e5] rounded-[15px] hover:bg-gray-50 transition-colors"
              style={{ width: 176.86, height: 53.59 }}
            >
              <div
                className="absolute flex gap-[13px] items-center"
                style={{ left: 23.64, top: "50%", transform: "translateY(-50%)" }}
              >
                <div className="relative shrink-0 size-[20px]">
                  <Image src="/icons/apple-logo.png" alt="Apple" fill sizes="20px" className="object-contain" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-medium text-[12px] leading-[20px] text-[#191919] whitespace-nowrap">Download on</p>
                  <p className="font-bold text-[16px] leading-[20px] text-[#191919] whitespace-nowrap">Apple Play</p>
                </div>
              </div>
            </a>
          </div>

          {/* Phone mockup on mobile */}
          <div className="relative mx-auto" style={{ width: 280, height: 340 }}>
            <Image
              src="/images/calltoaction.png"
              alt="Cardcentrals app on phone"
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
