"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    content: (
      <>
        <p>By using Cardcentrals, you confirm that you:</p>
        <ul>
          <li>Are at least 18 years old</li>
          <li>Agree to abide by these Terms and Conditions</li>
          <li>Will use the platform only for lawful purposes</li>
        </ul>
        <p>If you do not agree, please do not use our services.</p>
      </>
    ),
  },
  {
    heading: "User Accounts",
    content: (
      <>
        <p>To access full features, you must create an account on our mobile app.</p>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Keep your login details secure</li>
          <li>Be responsible for all activities under your account</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Gift Card Transactions",
    content: (
      <>
        <p>By submitting a gift card, you agree that:</p>
        <ul>
          <li>You are the rightful owner of the gift card</li>
          <li>The card is valid, unused, and legally obtained</li>
          <li>All details provided are accurate</li>
        </ul>
        <p>Cardcentrals reserves the right to:</p>
        <ul>
          <li>Reject invalid or suspicious transactions</li>
          <li>Verify gift card authenticity before processing</li>
          <li>Cancel transactions that violate our policies</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Rates and Payments",
    content: (
      <ul>
        <li>Gift card rates are subject to change at any time</li>
        <li>The applicable rate is the one shown at the time of transaction</li>
        <li>Payments are processed after successful verification</li>
        <li>Cardcentrals is not responsible for delays caused by incorrect user details</li>
      </ul>
    ),
  },
  {
    heading: "Prohibited Activities",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Submit stolen, fraudulent, or already used gift cards</li>
          <li>Attempt to hack, disrupt, or misuse the platform</li>
          <li>Use the platform for illegal activities</li>
          <li>Provide false or misleading information</li>
        </ul>
        <p>Violation of these rules may result in:</p>
        <ul>
          <li>Account suspension or termination</li>
          <li>Legal action where necessary</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Security",
    content: (
      <>
        <p>We take security seriously, but you are also responsible for:</p>
        <ul>
          <li>Keeping your account credentials safe</li>
          <li>Not sharing your login details</li>
          <li>Reporting any unauthorized access immediately</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Limitation of Liability",
    content: (
      <>
        <p>Cardcentrals shall not be held liable for:</p>
        <ul>
          <li>Losses resulting from invalid or fraudulent gift cards</li>
          <li>Delays caused by third-party services</li>
          <li>Technical issues beyond our control</li>
        </ul>
        <p>Use of the platform is at your own risk.</p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    content: (
      <p>
        Our platform may integrate or link to third-party services. We are not responsible for
        their content, policies, or actions.
      </p>
    ),
  },
  {
    heading: "Modifications to Terms",
    content: (
      <p>
        We reserve the right to update or modify these Terms at any time. Continued use of the
        platform after changes means you accept the updated Terms.
      </p>
    ),
  },
  {
    heading: "Termination",
    content: (
      <>
        <p>We may suspend or terminate your access if:</p>
        <ul>
          <li>You violate these Terms</li>
          <li>We detect suspicious or fraudulent activity</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Governing Law",
    content: (
      <p>
        These Terms shall be governed by and interpreted in accordance with the laws of the
        Federal Republic of Nigeria.
      </p>
    ),
  },
  {
    heading: "Contact Information",
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul>
          <li>Email: support@Cardcentrals.com</li>
          <li>WhatsApp: +(234) 810-899-3922</li>
        </ul>
      </>
    ),
  },
];

function Section({
  heading,
  content,
  index,
}: {
  heading: string;
  content: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 50);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""} flex flex-col gap-3 sm:gap-4`}
      style={{ transitionDelay: `${index * 0.04}s` }}
    >
      <h2 className="font-bold text-[#191919] text-[22px] sm:text-[26px] xl:text-[30px] leading-[1.3]">
        {heading}
      </h2>
      <div className="terms-body font-medium text-[#525252] text-[15px] sm:text-[16px] leading-[1.7]">
        {content}
      </div>
    </div>
  );
}

export default function TermsContent() {
  return (
    <>
      {/* Inline styles for terms body prose */}
      <style>{`
        .terms-body p { margin-bottom: 0.6rem; }
        .terms-body p:last-child { margin-bottom: 0; }
        .terms-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 0.6rem; }
        .terms-body ul:last-child { margin-bottom: 0; }
        .terms-body li { margin-bottom: 0.25rem; }
      `}</style>

      <section className="w-full px-4 sm:px-6 xl:px-0 pt-10 sm:pt-14 xl:pt-16 pb-14 sm:pb-20 xl:pb-[120px]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-10 sm:gap-12 xl:gap-[48px]">
          {SECTIONS.map((sec, i) => (
            <Section key={sec.heading} heading={sec.heading} content={sec.content} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
