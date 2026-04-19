import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import HomeClient from "./HomeClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Cardcentrals | Sell Your Gift Cards Instantly",
  description:
    "Cardcentrals is the fast, secure, and trusted platform to sell your gift cards at the best rates.",
};

export default function HomePage() {
  return (
    <main>
      <HomeClient />
      <CallToAction />
    </main>
  );
}
