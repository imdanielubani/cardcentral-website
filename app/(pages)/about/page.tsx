import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cardcentrals | who we are, our mission, and why thousands trust us to sell their gift cards at the best rates.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutClient />
      <CallToAction />
    </main>
  );
}
