import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { getTestimonials, getTestimonialsPage } from "@/sanity/lib/content";

export const metadata = {
  title: "Testimonials | Blueprint Advisors",
  description: "What students, parents, and professionals say about Blueprint Advisors.",
};

export default async function TestimonialsPage() {
  const [page, testimonials] = await Promise.all([getTestimonialsPage(), getTestimonials()]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={page.title} subtitle={page.subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial._id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              audience={testimonial.audience}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
