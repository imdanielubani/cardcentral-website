import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const revalidate = 60; // ISR: re-render every 60 seconds (rates change frequently)

export const metadata: Metadata = {
  title: "Gift Card Rates",
  description:
    "Check the latest gift card exchange rates on Cardcentrals. Get the best value for Amazon, iTunes, Steam, and more.",
};

export default function RatesPage() {
  return (
    <main>
      <h1>Gift Card Rates</h1>
      <CallToAction />
    </main>
  );
}
