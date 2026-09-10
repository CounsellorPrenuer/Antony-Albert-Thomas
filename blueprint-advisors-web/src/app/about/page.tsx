import { PortableText } from "@portabletext/react";
import { Container } from "@/components/ui/Container";
import { SanityImage } from "@/components/ui/SanityImage";
import { getAboutPage } from "@/sanity/lib/content";

export const metadata = {
  title: "About | Blueprint Advisors",
  description: "Learn how Blueprint Advisors helps build strategic, high-impact career journeys.",
};

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#001F3F]">{about.subtitle}</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#001F3F]">{about.title}</h1>
          <div className="prose mt-6 max-w-none prose-slate">
            <PortableText value={about.body || []} />
          </div>
        </div>
        <div className="h-96 overflow-hidden rounded-3xl">
          <SanityImage image={about.image} alt={about.title || "About Blueprint Advisors"} className="h-96" />
        </div>
      </Container>
    </section>
  );
}
