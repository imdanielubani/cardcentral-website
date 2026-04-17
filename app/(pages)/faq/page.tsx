import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to frequently asked questions about selling gift cards on Cardcentrals.",
};

export default function FaqPage() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>
      <CallToAction />
    </main>
  );
}
