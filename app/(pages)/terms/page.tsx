import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Cardcentrals Terms and Conditions to understand the rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <main>
      <h1>Terms and Conditions</h1>
      <CallToAction />
    </main>
  );
}
