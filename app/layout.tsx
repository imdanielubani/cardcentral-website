import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Cardcentrals | Sell Your Gift Cards Instantly",
    template: "%s | Cardcentrals",
  },
  description:
    "Cardcentrals is the fast, secure, and trusted platform to sell your gift cards at the best rates.",
  metadataBase: new URL("https://cardcentrals.com"),
  applicationName: "Cardcentrals",
  authors: [{ name: "Cardcentrals" }],
  creator: "Cardcentrals",
  publisher: "Cardcentrals",
  keywords: [
    "sell gift cards",
    "gift card exchange",
    "Amazon gift card",
    "iTunes gift card",
    "Steam gift card",
    "gift card rates Nigeria",
    "Cardcentrals",
    "trade gift cards",
    "gift card to cash",
  ],
  icons: {
    icon: "/images/iconlogo.png",
    shortcut: "/images/iconlogo.png",
    apple: "/images/iconlogo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Cardcentrals",
    type: "website",
    locale: "en_US",
    url: "https://cardcentrals.com",
    title: "Cardcentrals | Sell Your Gift Cards Instantly",
    description:
      "Cardcentrals is the fast, secure, and trusted platform to sell your gift cards at the best rates.",
    images: [
      {
        url: "/images/Hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cardcentrals — Sell Your Gift Cards Instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardcentrals | Sell Your Gift Cards Instantly",
    description:
      "Cardcentrals is the fast, secure, and trusted platform to sell your gift cards at the best rates.",
    images: ["/images/Hero.jpg"],
    creator: "@cardcentrals",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={`${manrope.variable} min-h-screen flex flex-col antialiased font-sans`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
