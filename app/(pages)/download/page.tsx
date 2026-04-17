import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Download the Cardcentrals app on Google Play or Apple Store and start selling your gift cards instantly.",
};

export default function DownloadPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-5 py-20 text-center">
      <div className="flex flex-col items-center gap-6 max-w-[520px]">

        <div className="relative w-[180px] h-[36px]">
          <Image
            src="/images/logo.png"
            alt="Cardcentrals"
            fill
            sizes="180px"
            className="object-contain"
            priority
          />
        </div>

        <h1 className="font-bold text-[40px] leading-[48px] text-[#191919] tracking-[-0.5px]">
          Download Our App
        </h1>

        <p className="font-medium text-[16px] leading-[27.2px] text-[#191919]/70">
          Fast, secure, and reliable gift card exchange — right from your phone.
          Available on Google Play and Apple Store.
        </p>

        <div className="flex flex-col gap-[10px] w-full max-w-[220px]">

          {/* Google Play */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center w-full bg-[#0159c7] rounded-[15px] hover:opacity-90 transition-opacity"
            style={{ height: 54, border: "5px solid rgba(18,108,248,0.5)" }}
          >
            <div className="absolute size-[22px]" style={{ left: 22, top: 11 }}>
              <Image src="/icons/google-play.png" alt="Google Play" fill sizes="22px" className="object-contain" />
            </div>
            <div className="absolute flex flex-col items-start" style={{ left: 56, top: 4 }}>
              <p className="font-medium text-[12px] leading-[25.6px] text-white whitespace-nowrap">
                Download on
              </p>
              <p className="font-bold text-[16px] leading-[25.6px] text-white whitespace-nowrap">
                Google Play
              </p>
            </div>
          </a>

          {/* Apple Play */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center w-full bg-white border-[1.5px] border-[#e5e5e5] rounded-[15px] hover:bg-gray-50 transition-colors"
            style={{ height: 54 }}
          >
            <div className="absolute flex gap-[13px] items-center" style={{ left: 22, top: 4 }}>
              <div className="relative shrink-0 size-[20px]">
                <Image src="/icons/apple-logo.png" alt="Apple" fill sizes="20px" className="object-contain" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-medium text-[12px] leading-[25.6px] text-[#191919] whitespace-nowrap">
                  Download on
                </p>
                <p className="font-bold text-[16px] leading-[25.6px] text-[#191919] whitespace-nowrap">
                  Apple Play
                </p>
              </div>
            </div>
          </a>

        </div>
      </div>
      <CallToAction />
    </main>
  );
}
