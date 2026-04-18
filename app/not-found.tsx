import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";

export default function NotFound() {
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

        {/* Content */}
        <div className="relative flex flex-col items-center text-center px-5 pt-[190px] sm:pt-[150px] md:pt-[170px] xl:pt-[250px] gap-[14px] sm:gap-[18px] pb-[100px]">

          {/* ERROR 404 badge */}
          <div
            className="animate-fade-up flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
            style={{
              background: "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
              borderColor: "rgba(1,89,199,0.2)",
            }}
          >
            <span className="font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px] leading-[19.5px]">
              ERROR 404
            </span>
          </div>

          {/* Heading + description */}
          <div className="animate-fade-up anim-delay-100 flex flex-col items-center gap-[15px]">
            <h1 className="font-extrabold text-[#191919] text-[32px] sm:text-[48px] xl:text-[60px] leading-[1.1] max-w-[340px] sm:max-w-none">
              Sorry! Page not found
            </h1>
            <p
              className="animate-fade-up anim-delay-300 font-medium text-[#525252] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[700px] xl:max-w-[900px]"
            style={{ lineHeight: "1.7" }}
            >
              The page you&apos;re looking for doesn&apos;t exist or may have been moved.
              <br className="hidden sm:block" />
              But don&apos;t worry — you can still sell your gift cards easily on Cardcentrals.
            </p>
          </div>

          {/* Back to Home button */}
          <Link
            href={ROUTES.HOME}
            className="animate-fade-up anim-delay-200 inline-flex items-center gap-[15px] bg-[#0159c7] hover:opacity-90 transition-opacity rounded-[15px] h-[54px] px-5"
            style={{ border: "5px solid rgba(18,108,248,0.5)" }}
          >
            <span className="font-bold text-[16px] text-white leading-[25.6px] whitespace-nowrap">
              Back to Home
            </span>
            <Image src="/icons/home.png" alt="" width={20} height={20} className="object-contain" priority />
          </Link>

        </div>
      </section>

    </main>
  );
}
