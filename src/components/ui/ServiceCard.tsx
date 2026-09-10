import Link from "next/link";
import { SanityImage } from "@/components/ui/SanityImage";

type ServiceCardProps = {
  title: string;
  summary: string;
  image?: unknown;
  ctaLabel?: string;
  ctaHref?: string;
};

export function ServiceCard({ title, summary, image, ctaLabel, ctaHref }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-4 h-40 overflow-hidden rounded-xl">
        <SanityImage image={image} alt={title} className="h-40" />
      </div>
      <h3 className="text-xl font-semibold text-[#001F3F]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{summary}</p>
      <Link href={ctaHref || "/contact"} className="mt-4 inline-block text-sm font-semibold text-[#001F3F]">
        {ctaLabel || "Learn More"} →
      </Link>
    </article>
  );
}
