import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RequestPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

async function sendEmail(payload: RequestPayload, type: "contact" | "booking") {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_RECEIVER_EMAIL;

  if (!host || !user || !pass || !to) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to,
    subject: `[Blueprint Advisors] ${type === "contact" ? "Contact" : "Booking"} form submission`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || "N/A"}\nSubject: ${payload.subject || "N/A"}\nMessage: ${payload.message}`,
  });

  return true;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as RequestPayload;

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    await sendEmail(payload, "contact");

    return NextResponse.json({ message: "Thank you! Your message has been received." });
  } catch {
    return NextResponse.json({ error: "Unable to submit form right now." }, { status: 500 });
  }
}
