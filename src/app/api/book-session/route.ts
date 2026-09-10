import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RequestPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

async function sendEmail(payload: RequestPayload) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.BOOKING_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL;

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
    subject: "[Blueprint Advisors] Booking request",
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

    await sendEmail(payload);

    return NextResponse.json({ message: "Your booking request has been submitted." });
  } catch {
    return NextResponse.json({ error: "Unable to submit booking right now." }, { status: 500 });
  }
}
