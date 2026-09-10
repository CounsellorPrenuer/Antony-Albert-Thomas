type TestimonialCardProps = {
  quote: string;
  name: string;
  role?: string;
  audience?: string;
  rating?: number;
};

export function TestimonialCard({ quote, name, role, audience, rating = 5 }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="mb-4 text-sm text-amber-500">{"★".repeat(Math.max(1, Math.min(5, rating)))}</p>
      <p className="text-base leading-relaxed text-slate-700">“{quote}”</p>
      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-semibold text-[#001F3F]">{name}</p>
        <p className="text-xs text-slate-500">{[role, audience].filter(Boolean).join(" • ")}</p>
      </div>
    </article>
  );
}
