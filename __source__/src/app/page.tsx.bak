import Link from "next/link";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { SanityImage } from "@/components/ui/SanityImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ContactForm } from "@/components/sections/ContactForm";
import { getFeaturedTestimonials, getHomePage, getRecentPosts, getServices } from "@/sanity/lib/content";

export default async function HomePage() {
  const [home, services, testimonials, posts] = await Promise.all([
    getHomePage(),
    getServices(),
    getFeaturedTestimonials(),
    getRecentPosts(),
  ]);

  return (
    <div>
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#001F3F]">{home.heroSubtitle}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#001F3F] sm:text-5xl">{home.heroTitle}</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{home.heroDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={home.heroCtaHref || "/book-session"} className="rounded-md bg-[#001F3F] px-6 py-3 text-sm font-semibold text-white">
                {home.heroCtaLabel || "Book a Free Career Call"}
              </Link>
              <Link href="/services" className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="h-80 overflow-hidden rounded-3xl">
            <SanityImage image={home.heroImage} alt="Blueprint Advisors" className="h-80" />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title={home.aboutTitle} subtitle={home.aboutText} />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading title="Services" subtitle="Structured guidance for every stage of your career journey." />
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service: any) => (
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

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title={home.whyChooseUsTitle || "Why Choose Us"} />
          <div className="grid gap-4 sm:grid-cols-2">
            {(home.whyChooseUsItems || []).map((item: string, index: number) => (
              <div key={`${item}-${index}`} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading title="Testimonials" subtitle="Trust built through real outcomes." />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial: any) => (
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

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title="From Our Blog" subtitle="Latest career strategy insights." />
          <div className="grid gap-6 md:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post: any) => (
                <BlogCard
                  key={post._id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  date={post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : undefined}
                  author={post.author}
                />
              ))
            ) : (
              <p className="text-sm text-slate-600">Add blog posts in Sanity to display them here.</p>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeading title={home.contactTitle || "Contact Us"} subtitle={home.contactText} />
          </div>
          <ContactForm endpoint="/api/contact" submitLabel="Send Message" />
        </Container>
      </section>
    </div>
  );
}
