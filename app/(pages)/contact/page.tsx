import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question or need support? Contact the Cardcentrals team and we'll get back to you as soon as possible.",
  keywords: [
    "Cardcentrals contact",
    "Cardcentrals support",
    "gift card help",
    "customer service",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Cardcentrals",
    description:
      "Reach the Cardcentrals support team — we'll get back to you as soon as possible.",
    url: "/contact",
    type: "website",
    images: [{ url: "/images/Hero.jpg", width: 1200, height: 630, alt: "Contact Cardcentrals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cardcentrals",
    description: "Reach our support team — we'll get back to you as soon as possible.",
    images: ["/images/Hero.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
      <CallToAction />
    </main>
  );
}
