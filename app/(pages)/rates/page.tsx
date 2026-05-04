import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const revalidate = 60; // ISR: re-render every 60 seconds (rates change frequently)

export const metadata: Metadata = {
  title: "Gift Card Rates",
  description:
    "Check the latest gift card exchange rates on Cardcentrals. Get the best value for Amazon, iTunes, Steam, Google Play, and more.",
  keywords: [
    "gift card rates",
    "Amazon gift card rate",
    "iTunes gift card rate",
    "Steam gift card rate",
    "Google Play card rate",
    "live gift card prices",
  ],
  alternates: { canonical: "/rates" },
  openGraph: {
    title: "Live Gift Card Rates | Cardcentrals",
    description:
      "Check today's exchange rates for Amazon, iTunes, Steam, Google Play, and more.",
    url: "/rates",
    type: "website",
    images: [{ url: "/images/Hero.jpg", width: 1200, height: 630, alt: "Cardcentrals gift card rates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Gift Card Rates | Cardcentrals",
    description:
      "Check today's exchange rates for Amazon, iTunes, Steam, Google Play, and more.",
    images: ["/images/Hero.jpg"],
  },
};

export default function RatesPage() {
  return (
    <main>
      <h1>Gift Card Rates</h1>
      <CallToAction />
    </main>
  );
}
