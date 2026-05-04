import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import HomeClient from "./HomeClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Cardcentrals | Sell Your Gift Cards Instantly",
  description:
    "Cardcentrals is the fast, secure, and trusted platform to sell your gift cards at the best rates. Trade Amazon, iTunes, Steam, Google Play, and more.",
  keywords: [
    "sell gift cards online",
    "best gift card rates",
    "instant gift card payout",
    "trade gift cards Nigeria",
    "Cardcentrals",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cardcentrals | Sell Your Gift Cards Instantly",
    description:
      "The fast, secure, and trusted platform to sell your gift cards at the best rates.",
    url: "/",
    type: "website",
    images: [{ url: "/images/Hero.jpg", width: 1200, height: 630, alt: "Cardcentrals home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardcentrals | Sell Your Gift Cards Instantly",
    description:
      "The fast, secure, and trusted platform to sell your gift cards at the best rates.",
    images: ["/images/Hero.jpg"],
  },
};

export default function HomePage() {
  return (
    <main>
      <HomeClient />
      <CallToAction />
    </main>
  );
}
