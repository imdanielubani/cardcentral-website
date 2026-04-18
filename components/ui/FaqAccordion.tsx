"use client";

import { useState, useEffect, useRef } from "react";

const FAQS = [
  {
    question: "How do I sell my gift card on Cardcentrals?",
    answer:
      "Download the Cardcentrals app, create an account, and submit your gift card details to get started.",
  },
  {
    question: "How long does it take to get paid?",
    answer:
      "Payments are processed instantly after your gift card is verified. Most transactions are completed in under 5 minutes.",
  },
  {
    question: "Is Cardcentrals safe and legit?",
    answer:
      "Yes! Cardcentrals is a fully verified and trusted platform. All transactions are secured with encryption, and we've served thousands of satisfied customers.",
  },
  {
    question: "What gift cards do you accept?",
    answer:
      "We accept a wide range of gift cards including Amazon, iTunes, Google Play, Steam, and many more. Visit our Rates page for the full list.",
  },
  {
    question: "Do I need to pay any fees before selling?",
    answer:
      "No. Cardcentrals charges zero upfront fees. Our small service charge is deducted from your payout, so there's nothing to pay before you sell.",
  },
  {
    question: "How do I check gift card rates?",
    answer:
      "Visit our Rates page on the website or app to see the latest exchange rates for all supported gift cards in real time.",
  },
  {
    question: "What happens if my gift card is invalid?",
    answer:
      "If your gift card is found to be invalid or already used, your transaction will be cancelled and you'll be notified immediately through the app.",
  },
  {
    question: "Can I sell gift cards from any country?",
    answer:
      "We currently accept gift cards issued in the US, UK, Canada, and Australia. Support for more countries is coming soon.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email at support@cardcentrals.com or call us at + (234) 810-899-3922. We're available 24/7.",
  },
  {
    question: "Do I need an account to use Cardcentrals?",
    answer:
      "Yes, you need to create a free account to sell your gift cards. This helps us verify your identity and process your payments securely.",
  },
];

function ChevronDown() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path
        d="M1 1L8 8.5L15 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // stagger by index
          setTimeout(() => setVisible(true), index * 60);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 0.04}s` }}
    >
      <div
        className={`rounded-[10px] sm:rounded-[12px] border border-[rgba(0,19,5,0.15)] overflow-hidden transition-colors duration-200 ${
          isOpen ? "bg-[#f8f8f8]" : "bg-white"
        }`}
      >
        {/* Question row */}
        <button
          type="button"
          className="w-full flex items-start gap-4 sm:gap-6 px-4 sm:px-8 py-4 sm:py-6 text-left cursor-pointer"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span className="flex-1 font-semibold text-[15px] sm:text-[18px] xl:text-[20px] leading-[1.4] text-black">
            {faq.question}
          </span>
          <span
            className={`shrink-0 mt-[5px] sm:mt-[4px] text-black transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown />
          </span>
        </button>

        {/* Animated answer panel */}
        <div className={`faq-answer-grid${isOpen ? " open" : ""}`}>
          <div className="faq-answer-inner">
            <div className="px-4 sm:px-8 pb-4 sm:pb-6">
              <div className="border-t border-[rgba(117,117,117,0.2)] pt-4 sm:pt-6">
                <p className="font-normal text-[#393939] text-[14px] sm:text-[16px] leading-[1.6] tracking-[-0.3px] sm:tracking-[-0.48px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full px-4 sm:px-6 xl:px-0 pt-8 sm:pt-12 xl:pt-10 pb-12 sm:pb-16 xl:pb-[120px]">
      <div className="max-w-[842px] mx-auto flex flex-col gap-[10px]">
        {FAQS.map((faq, i) => (
          <FaqItem
            key={i}
            faq={faq}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
