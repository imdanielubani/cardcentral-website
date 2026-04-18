import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const revalidate = 3600; // ISR: re-render at most once per hour

export const metadata: Metadata = {
  title: "Cardcentrals | Sell Your Gift Cards Instantly",
  description:
    "Cardcentrals is the fast, secure, and trusted platform to sell your gift cards at the best rates.",
};

export default function HomePage() {
  return (
    <main>
      {/* Other page sections will go here */}
      <CallToAction />
    </main>
  );
}
