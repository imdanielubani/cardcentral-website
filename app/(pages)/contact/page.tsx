import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question or need support? Contact the Cardcentrals team and we'll get back to you as soon as possible.",
};

export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <CallToAction />
    </main>
  );
}
