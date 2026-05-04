import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cardcentrals — who we are, our mission, and why thousands trust us to sell their gift cards at the best rates.",
  keywords: [
    "about Cardcentrals",
    "gift card company Nigeria",
    "trusted gift card platform",
    "Cardcentrals mission",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Cardcentrals",
    description:
      "Learn about Cardcentrals — who we are, our mission, and why thousands trust us to sell their gift cards.",
    url: "/about",
    type: "website",
    images: [{ url: "/images/aboutphone.jpg", width: 1200, height: 630, alt: "About Cardcentrals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cardcentrals",
    description:
      "Who we are, our mission, and why thousands trust us to sell their gift cards.",
    images: ["/images/aboutphone.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutClient />
      <CallToAction />
    </main>
  );
}
