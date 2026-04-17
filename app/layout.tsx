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
  icons: {
    icon: "/images/iconlogo.png",
  },
  openGraph: {
    siteName: "Cardcentrals",
    type: "website",
  },
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
