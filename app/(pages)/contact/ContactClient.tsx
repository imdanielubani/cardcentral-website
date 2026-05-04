"use client";

import Image from "next/image";
import { useEffect, useRef, useState, FormEvent } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

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

function ContactInfoCard({
  icon,
  title,
  value,
  delay,
}: {
  icon: string;
  title: string;
  value: string;
  delay: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""} bg-[#f8f8f8] rounded-[20px] sm:rounded-[24px] flex flex-col items-center text-center px-6 py-8 sm:py-10`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="size-[56px] sm:size-[62px] rounded-[14px] bg-white shadow-[0px_3px_4px_-1.5px_rgba(0,0,0,0.14),0px_0px_0px_1px_rgba(0,0,0,0.06)] flex items-center justify-center mb-5 sm:mb-6">
        <Image src={icon} alt="" width={30} height={30} />
      </div>
      <h3 className="font-semibold text-[#0f172a] text-[20px] sm:text-[24px] leading-[1.2] mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="font-normal text-[#44454c] text-[15px] sm:text-[16px] leading-[1.5] tracking-[-0.16px]">
        {value}
      </p>
    </div>
  );
}

type FieldErrors = Partial<Record<"fullName" | "email" | "phone" | "subject" | "message" | "consent", string>>;

function validate(values: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}): FieldErrors {
  const errs: FieldErrors = {};
  if (values.fullName.trim().length < 2) errs.fullName = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errs.email = "Please enter a valid email address.";
  if (values.phone.replace(/\D/g, "").length < 7) errs.phone = "Please enter a valid phone number.";
  if (values.subject.trim().length < 2) errs.subject = "Please enter a subject.";
  if (values.message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
  if (!values.consent) errs.consent = "Please accept the Privacy Policy and Conditions.";
  return errs;
}

export default function ContactClient() {
  const formReveal = useReveal();
  const faqHeadReveal = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const setField = <K extends keyof typeof values>(name: K, value: (typeof values)[K]) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[name as keyof FieldErrors];
        return next;
      });
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 422 && data?.fields) {
          setErrors(data.fields);
          setStatus("error");
          setStatusMessage("Please fix the highlighted fields.");
        } else {
          setStatus("error");
          setStatusMessage(data?.error || "Something went wrong. Please try again.");
        }
        return;
      }

      setStatus("success");
      setStatusMessage("Thanks! Your message has been sent — we'll get back to you shortly.");
      setValues({ fullName: "", email: "", phone: "", subject: "", message: "", consent: false });
      setErrors({});
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          marginTop: -95,
          backgroundImage:
            "linear-gradient(-32.42deg, rgb(255,255,255) 60%, rgba(166,201,255,0.15) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/herobgsection.png')",
            backgroundSize: "cover",
            backgroundPosition: "left top",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
          }}
        />

        <div className="relative flex flex-col items-center text-center px-5 pt-[170px] sm:pt-[150px] md:pt-[170px] xl:pt-[230px] pb-[40px] sm:pb-[50px] xl:pb-[60px] gap-[14px] sm:gap-[18px]">
          <div
            className="animate-fade-up flex items-center justify-center h-[34px] sm:h-[38px] px-[15px] sm:px-[17px] rounded-full border-2"
            style={{
              background:
                "linear-gradient(to right, rgba(1,89,199,0.1), rgba(18,108,248,0.1))",
              borderColor: "rgba(1,89,199,0.2)",
            }}
          >
            <span className="font-semibold text-[12px] sm:text-[13px] text-[#126cf8] tracking-[0.26px] leading-[19.5px]">
              CONTACT US
            </span>
          </div>

          <h1 className="animate-fade-up anim-delay-100 font-semibold text-[#0f172a] text-[28px] sm:text-[42px] md:text-[52px] xl:text-[60px] leading-[1.1] tracking-[-1.6px] max-w-[320px] sm:max-w-none">
            Let&apos;s Connect <br className="hidden sm:block" />
            We&apos;re Here to Help!
          </h1>

          <p
            className="animate-fade-up anim-delay-200 font-normal text-[#666] text-[15px] sm:text-[16px] xl:text-[18px] max-w-[90%] sm:max-w-[580px] xl:max-w-[662px]"
            style={{ lineHeight: "1.5", letterSpacing: "-0.54px" }}
          >
            We&apos;re here to help, so contact us with any questions or feedback
          </p>
        </div>
      </section>

      {/* ── Contact Form ────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 xl:px-0 pb-12 sm:pb-16">
        <div
          ref={formReveal.ref}
          className={`reveal${formReveal.visible ? " visible" : ""} max-w-[920px] mx-auto bg-[#f8f8f8] rounded-[20px] p-5 sm:p-8 xl:p-10`}
        >
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Field
                label="Full Name*"
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={(v) => setField("fullName", v)}
                error={errors.fullName}
              />
              <Field
                label="Email*"
                name="email"
                type="email"
                placeholder="Email Address"
                value={values.email}
                onChange={(v) => setField("email", v)}
                error={errors.email}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Field
                label="Phone Number*"
                name="phone"
                type="tel"
                placeholder="+(234) 800 000 0000"
                value={values.phone}
                onChange={(v) => setField("phone", v)}
                error={errors.phone}
              />
              <Field
                label="Subject*"
                name="subject"
                placeholder="How can we help?"
                value={values.subject}
                onChange={(v) => setField("subject", v)}
                error={errors.subject}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[15px] sm:text-[16px] text-black tracking-[-0.16px]">
                Message*
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                aria-invalid={!!errors.message}
                className={`w-full bg-white border rounded-[6px] px-5 py-3.5 text-[15px] sm:text-[16px] text-black placeholder:text-[#808080] tracking-[-0.16px] outline-none transition-colors resize-none ${
                  errors.message ? "border-[#dc2626] focus:border-[#dc2626]" : "border-[#d3d3d3] focus:border-[#126cf8]"
                }`}
              />
              {errors.message && (
                <p className="text-[12px] text-[#dc2626] mt-0.5">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-[55px] sm:h-[59px] rounded-[8px] bg-[#126cf8] text-white font-medium text-[16px] sm:text-[18px] tracking-[-0.54px] shadow-[0px_4px_16px_0px_rgba(0,103,255,0.25)] hover:bg-[#0159c7] transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>

            {status !== "idle" && (
              <div
                role="status"
                className={`rounded-[8px] px-4 py-3 text-[14px] leading-[1.5] ${
                  status === "success"
                    ? "bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0]"
                    : "bg-[#fef2f2] text-[#991b1b] border border-[#fecaca]"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <label className="flex items-start gap-2 mt-1 select-none cursor-pointer">
              <input
                type="checkbox"
                checked={values.consent}
                onChange={(e) => setField("consent", e.target.checked)}
                className="mt-[2px] size-[14px] accent-[#126cf8] cursor-pointer"
              />
              <span className="font-normal text-[#0c0407] text-[12px] tracking-[-0.36px] leading-[1.4]">
                By reaching out to us, you agree to our{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline">
                  Condition
                </a>
                {errors.consent && (
                  <span className="block text-[#dc2626] mt-1">{errors.consent}</span>
                )}
              </span>
            </label>
          </form>
        </div>
      </section>

      {/* ── Get In Touch ─────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 xl:px-0 pb-16 sm:pb-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-semibold text-[#0f172a] text-[28px] sm:text-[38px] xl:text-[48px] leading-[1.2] tracking-[-1.44px] mb-3">
              Let&apos;s Get In Touch
            </h2>
            <p className="font-normal text-[#44454c] text-[15px] sm:text-[16px] leading-[1.5] tracking-[-0.16px] max-w-[460px] mx-auto">
              Have questions or ready to start a conversation? <br className="hidden sm:block" />
              We&apos;d love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[860px] mx-auto">
            <ContactInfoCard
              icon="/icons/phone.png"
              title="Phone Number"
              value="+(234) 810-899-3922"
              delay={0}
            />
            <ContactInfoCard
              icon="/icons/email.png"
              title="Email Address"
              value="support@cardcentrals.com"
              delay={0.08}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 xl:px-0 pb-12 sm:pb-16 xl:pb-[100px]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          <div
            ref={faqHeadReveal.ref}
            className={`reveal${faqHeadReveal.visible ? " visible" : ""} flex flex-col gap-4 sm:gap-5`}
          >
            <div
              className="flex items-center justify-center h-[34px] sm:h-[38px] w-fit px-[15px] sm:px-[17px] rounded-full border-2"
              style={{
                background: "rgba(1,89,199,0.08)",
                borderColor: "rgba(1,89,199,0.2)",
              }}
            >
              <span className="font-semibold text-[11px] sm:text-[12px] text-[#0159c7] tracking-[0.48px]">
                FAQs
              </span>
            </div>

            <h2 className="font-extrabold text-[#191919] text-[32px] sm:text-[42px] xl:text-[50px] leading-[1.1] tracking-[-0.8px]">
              Frequently Asked <br className="hidden sm:block" />
              Questions
            </h2>

            <p className="font-normal text-[#525252] text-[15px] sm:text-[16px] leading-[1.7] max-w-[546px]">
              Got questions about how Cardcentrals works? We&apos;ve answered the most
              common questions to help you understand our platform, process, and how to
              get started quickly and safely.
            </p>

            {/* Still Have Questions? blue card */}
            <div
              className="rounded-[20px] sm:rounded-[25px] p-6 sm:p-[39px] flex flex-col gap-[14px] mt-2 sm:mt-4"
              style={{
                background: "#0159c7",
                border: "2.5px solid rgba(18,108,248,0.5)",
              }}
            >
              <h3 className="font-bold text-white text-[20px] sm:text-[24px] leading-[1.275]">
                Still Have Questions?
              </h3>
              <p className="font-normal text-[rgba(255,255,255,0.8)] text-[15px] sm:text-[16px] leading-[1.6]">
                Can&apos;t find the answer you&apos;re looking for? Our support team is always
                ready to help you. Reach out to us anytime and we&apos;ll respond as quickly
                as possible.
              </p>
              <div className="flex flex-wrap gap-[12px] sm:gap-[14px] mt-1">
                <a
                  href="mailto:support@cardcentrals.com"
                  className="inline-flex items-center justify-center h-[42px] sm:h-[45px] px-[18px] sm:px-[20px] rounded-[10px] border-2 border-[#e5e5e5] bg-white text-[#191919] font-bold text-[13px] sm:text-[14px] hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  Email Support
                </a>
                <a
                  href="https://wa.me/2348108993922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[42px] sm:h-[45px] px-[18px] sm:px-[20px] rounded-[10px] border-2 border-[#e5e5e5] bg-white text-[#191919] font-bold text-[13px] sm:text-[14px] hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
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
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-medium text-[15px] sm:text-[16px] text-black tracking-[-0.16px]">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full h-[48px] sm:h-[52px] bg-white border rounded-[6px] px-5 text-[15px] sm:text-[16px] text-black placeholder:text-[#808080] tracking-[-0.16px] outline-none transition-colors ${
          error ? "border-[#dc2626] focus:border-[#dc2626]" : "border-[#d3d3d3] focus:border-[#126cf8]"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="text-[12px] text-[#dc2626]">
          {error}
        </p>
      )}
    </div>
  );
}
