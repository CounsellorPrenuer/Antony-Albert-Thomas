import Link from "next/link";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  author?: string;
};

export function BlogCard({ title, slug, excerpt, date, author }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs text-slate-500">{[date, author].filter(Boolean).join(" • ")}</p>
      <h3 className="mt-2 text-xl font-semibold text-[#001F3F]">{title}</h3>
      {excerpt && <p className="mt-3 text-sm text-slate-600">{excerpt}</p>}
      <Link href={`/blog/${slug}`} className="mt-4 inline-block text-sm font-semibold text-[#001F3F]">
        Read Article →
      </Link>
    </article>
  );
}
