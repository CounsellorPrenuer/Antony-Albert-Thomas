"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  endpoint: "/api/contact" | "/api/book-session";
  submitLabel: string;
};

export function ContactForm({ endpoint, submitLabel }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      event.currentTarget.reset();
      setMessage(data.message || "Submitted successfully.");
      return;
    }

    setMessage(data.error || "Something went wrong. Please try again.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Full Name" className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#001F3F]" />
        <input required type="email" name="email" placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#001F3F]" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" placeholder="Phone Number" className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#001F3F]" />
        <input name="subject" placeholder="Subject" className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#001F3F]" />
      </div>
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell us about your goals"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#001F3F]"
      />
      <button disabled={loading} className="rounded-md bg-[#001F3F] px-5 py-2 text-sm font-semibold text-white disabled:opacity-70">
        {loading ? "Submitting..." : submitLabel}
      </button>
      {message && <p className="text-sm text-slate-600">{message}</p>}
    </form>
  );
}
