"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  {
    heading: "Information Collection and Use",
    content: (
      <>
        <p>We may collect the following types of information:</p>

        <p className="privacy-subheading">a. Personal Information</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment details</li>
        </ul>

        <p className="privacy-subheading">b. Transaction Information</p>
        <ul>
          <li>Gift card details submitted</li>
          <li>Transaction history</li>
          <li>Payment records</li>
        </ul>

        <p className="privacy-subheading">c. Device &amp; Usage Information</p>
        <ul>
          <li>IP address</li>
          <li>Device type</li>
          <li>Browser type</li>
          <li>App usage data</li>
        </ul>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Process and complete transactions</li>
          <li>Verify submitted gift cards</li>
          <li>Send transaction updates and notifications</li>
          <li>Improve our services and user experience</li>
          <li>Prevent fraud and ensure platform security</li>
          <li>Provide customer support</li>
        </ul>
      </>
    ),
  },
  {
    heading: "How We Protect Your Information",
    content: (
      <>
        <p>We implement strong security measures to protect your data, including:</p>
        <ul>
          <li>Secure servers and encryption</li>
          <li>Restricted access to personal data</li>
          <li>Continuous monitoring for suspicious activity</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Sharing of Information",
    content: (
      <>
        <p>
          We do not sell or rent your personal information. However, we may share your data with:
        </p>
        <ul>
          <li>Payment processors to complete transactions</li>
          <li>Legal authorities when required by law</li>
          <li>Service providers who help operate our platform</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Cookies & Tracking Technologies",
    content: (
      <>
        <p>Our website may use cookies to:</p>
        <ul>
          <li>Improve user experience</li>
          <li>Analyze website traffic</li>
          <li>Remember user preferences</li>
        </ul>
        <p>You can disable cookies in your browser settings if you prefer.</p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    content: (
      <p>
        Our platform may contain links to third-party services. We are not responsible for the
        privacy practices of those external platforms.
      </p>
    ),
  },
  {
    heading: "Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your data (where applicable)</li>
        </ul>
        <p>To make any requests, please contact us using the details below.</p>
      </>
    ),
  },
  {
    heading: "Children's Privacy",
    content: (
      <p>
        Cardcentrals does not knowingly collect personal information from individuals under the
        age of 18. If we become aware of such data, it will be deleted immediately.
      </p>
    ),
  },
  {
    heading: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated date.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
      <div className="privacy-body font-medium text-[#525252] text-[15px] sm:text-[16px] leading-[1.7]">
        {content}
      </div>
    </div>
  );
}

export default function PrivacyContent() {
  return (
    <>
      <style>{`
        .privacy-body p { margin-bottom: 0.6rem; }
        .privacy-body p:last-child { margin-bottom: 0; }
        .privacy-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .privacy-body ul:last-child { margin-bottom: 0; }
        .privacy-body li { margin-bottom: 0.25rem; }
        .privacy-subheading {
          font-weight: 600;
          font-size: 1rem;
          color: #191919;
          margin-top: 0.75rem;
          margin-bottom: 0.35rem;
        }
        @media (min-width: 640px) {
          .privacy-subheading { font-size: 1.125rem; }
        }
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
