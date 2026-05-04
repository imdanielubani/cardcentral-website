import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = (body.fullName ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (subject.length < 2) errors.subject = "Please enter a subject.";
  if (message.length < 10) errors.message = "Message must be at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "support@cardcentrals.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Cardcentrals <noreply@cardcentrals.com>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#191919;">
          <h2 style="margin:0 0 16px;">New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;background:#f8f8f8;padding:12px;border-radius:8px;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email.", name: error.name },
        { status: 502 }
      );
    }

    console.log("[contact] Sent:", data?.id);
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Exception:", err);
    const message = err instanceof Error ? err.message : "Failed to send email.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
