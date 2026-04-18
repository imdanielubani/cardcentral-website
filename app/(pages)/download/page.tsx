import type { Metadata } from "next";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Download the Cardcentrals app on Google Play or Apple Store and start selling your gift cards instantly.",
};

export default function DownloadPage() {
  return <DownloadClient />;
}
