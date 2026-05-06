"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    content: (
      <>
        <p>We may collect the following types of information:</p>

        <p className="privacy-subheading">a. Personal Information</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>

        <p className="privacy-subheading">b. Transaction Information</p>
        <ul>
          <li>Gift card details submitted by users</li>
          <li>Transaction history</li>
          <li>Payment and payout records</li>
        </ul>

        <p className="privacy-subheading">c. Device &amp; Usage Information</p>
        <ul>
          <li>IP address</li>
          <li>Device type and operating system</li>
          <li>App usage data and interactions</li>
          <li>Log data (such as access times and pages viewed)</li>
        </ul>
      </>
    ),
  },
  {
    heading: "2. How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Create and manage user accounts</li>
          <li>Process and complete transactions</li>
          <li>Verify submitted gift cards</li>
          <li>Send transaction updates and notifications</li>
          <li>Provide customer support</li>
          <li>Improve app performance and user experience</li>
          <li>Monitor and prevent fraud, abuse, or illegal activities</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
      </>
    ),
  },
  {
    heading: "3.Payment Processing",
    content: (
      <>
        <p>Cardcentrals does not store sensitive financial information such as debit/credit card numbers.</p>
        <p>All payments are processed securely through trusted third-party payment providers. 
        These providers handle your payment information in accordance with their own privacy policies and security standards.
        </p>
      </>
    ),
  },
  {
    heading: "4. Sharing of Information",
    content: (
      <>
        <p>
          We do not sell or rent your personal information. However, we may share your data with:
        </p>
        <ul>
          <li>Payment processors to complete transactions</li>
          <li>Service providers that help operate our platform (e.g., hosting, analytics)</li>
          <li>Fraud prevention and security partners</li>
          <li>Legal authorities, when required by law or to protect our rights</li>
        </ul>
        <p>
         All third parties are required to protect your data and use it only for the intended purpose.
        </p>
      </>
    ),
  },
  {
    heading: "5. Data Retention",
    content: (
      <>
        <p>We retain your personal information only for as long as necessary to:</p>
        <ul>
          <li>Provide our services</li>
          <li>Maintain transaction records</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
        <p>When your data is no longer required, we securely delete or anonymize it.</p>
      </>
    ),
  },
  {
    heading: "6. Data Security",
    content: (
      <>
        <p>We implement industry-standard security measures to protect your information, including:</p>
        <ul>
          <li>Data encryption</li>
          <li>Secure servers</li>
          <li>Access controls and authentication</li>
          <li>Continuous monitoring for suspicious activities</li>
        </ul>
        <p>While we strive to protect your data, no system is 100% secure.</p>
      </>
    ),
  },
  {
    heading: "7. Cookies & Tracking Technologies",
    content: (
      <>
        <p>Our website may use cookies and similar technologies to:</p>
        <ul>
          <li>Enhance user experience</li>
          <li>Analyze traffic and usage patterns</li>
          <li>Remember user preferences</li>
        </ul>
        <p>You can control or disable cookies through your browser settings.</p>
      </>
    ),
  },
  {
  heading: "8. Third-Party Services",
  content: (
    <>
      <p>
        Cardcentrals may contain links to third-party websites or services.
      </p>
      <p>
        We are not responsible for the privacy practices or content of those external platforms. 
        We encourage users to review their privacy policies.
      </p>
    </>
  ),
},
{
    heading: "9. Your Rights",
    content: (
      <>
        <p>Depending on applicable laws, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict certain processing</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the details below.</p>
      </>
    ),
  },
  {
    heading: "10. Children's Privacy",
    content: (
       <>
      <p>
        Cardcentrals is not intended for individuals under the age of 18.
      </p>
       <p>
        We do not knowingly collect personal information from children. 
        If such data is identified, it will be deleted promptly.
      </p>
      </>
    ),
  },
  {
    heading: "11. Legal Compliance",
    content: (
      <p>
        We comply with applicable data protection laws, 
        including the Nigerian Data Protection Act (NDPA) and other relevant regulations.
      </p>
    ),
  },
  {
    heading: "12. Changes to This Policy",
    content: (
      <>
      <p>
        We may update this Privacy Policy from time to time.
      </p>
       <p>
        Any changes will be posted on this page with an updated effective date. 
        Continued use of the platform means you accept the updated policy.
      </p>
      </>
    ),
  },
  {
    heading: "13. Contact Us",
    content: (
      <>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: support@Cardcentrals.com</li>
          <li>WhatsApp: +(234) 810-899-3922</li>
        </ul>
      </>
    ),
  },
  {
    heading: "",
    content: (
      <>
        <p>Cardcentrals is committed to protecting your privacy and ensuring transparency in how your data is handled.</p>
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
