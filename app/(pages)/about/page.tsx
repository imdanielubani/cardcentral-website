import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cardcentrals – who we are, our mission, and why thousands trust us to sell their gift cards.",
};

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <CallToAction />
    </main>
  );
}
