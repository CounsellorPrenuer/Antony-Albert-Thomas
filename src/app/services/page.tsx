import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServices, getServicesPage } from "@/sanity/lib/content";

export const metadata = {
  title: "Services | Blueprint Advisors",
  description: "Career guidance, workshops, and admission guidance from Blueprint Advisors.",
};

export default async function ServicesPage() {
  const [page, services] = await Promise.all([getServicesPage(), getServices()]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={page.title} subtitle={page.subtitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              title={service.title}
              summary={service.summary || service.description || ""}
              image={service.image}
              ctaLabel={service.ctaLabel}
              ctaHref={service.ctaHref}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
