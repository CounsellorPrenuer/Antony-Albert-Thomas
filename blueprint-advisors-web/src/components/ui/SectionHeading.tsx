type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto mb-8 max-w-3xl text-center" : "mb-8 max-w-3xl"}>
      <h2 className="text-3xl font-semibold tracking-tight text-[#001F3F] sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
