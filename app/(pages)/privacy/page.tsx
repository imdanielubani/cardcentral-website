import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Cardcentrals collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <CallToAction />
    </main>
  );
}
