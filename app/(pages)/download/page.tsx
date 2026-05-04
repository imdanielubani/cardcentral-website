import type { Metadata } from "next";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Download the Cardcentrals app on Google Play or the Apple App Store and start selling your gift cards instantly.",
  keywords: [
    "download Cardcentrals",
    "Cardcentrals app",
    "gift card app",
    "Google Play",
    "App Store",
    "iOS gift card app",
    "Android gift card app",
  ],
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download the Cardcentrals App",
    description:
      "Get the Cardcentrals app on Google Play or the Apple App Store and start selling gift cards instantly.",
    url: "/download",
    type: "website",
    images: [{ url: "/images/downloadmockup.png", width: 1200, height: 630, alt: "Cardcentrals app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download the Cardcentrals App",
    description:
      "Get the Cardcentrals app on Google Play or the Apple App Store.",
    images: ["/images/downloadmockup.png"],
  },
};

export default function DownloadPage() {
  return <DownloadClient />;
}
