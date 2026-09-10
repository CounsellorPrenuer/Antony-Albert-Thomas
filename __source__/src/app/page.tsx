import Link from "next/link";
import Image from "next/image";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { SanityImage } from "@/components/ui/SanityImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ContactForm } from "@/components/sections/ContactForm";
import { MentoriaTabs } from "@/components/ui/MentoriaTabs";
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
      {/* HOME */}
      <section className="bg-white py-16 sm:py-24" id="home">
        <Container className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#001F3F]">STRATEGIC CAREER ARCHITECTS</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#001F3F] sm:text-5xl">Transform Career Uncertainty Into Intentional Success</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg max-w-2xl mx-auto">If you are ready to move beyond wishing to planning, our expertise is your essential foundation.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link 
                href="/#contact" 
                className="rounded-md px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#001F3F", color: "#ffffff" }}
              >
                Book a Free Career Call
              </Link>
              <Link href="/#services" className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700">
                Explore Services
              </Link>
          </div>
        </Container>
      </section>

      {/* ABOUT FOUNDER */}
      <section className="bg-slate-50 py-16 sm:py-20" id="about">
        <Container className="grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 relative w-full max-w-md mx-auto">
             <Image src="/Antony-Albert-Thomas/founder.png" alt="Antony Albert Thomas" width={500} height={600} className="object-contain w-full h-auto rounded-3xl" />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading title="About Founder" subtitle="Antony Albert Thomas" />
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>Welcome to Blueprint Advisors. As strategic Career Architects, we transform career uncertainty into intentional, measurable success. In today's dynamic professional landscape, a traditional path is often insufficient.</p>
              <p>We specialize in providing counselling to develop robust, custom-designed career blueprints that align your core strengths, market opportunities, and long-term vision. We don't just offer advice; we help you to explore the methodology and structure required to build a resilient, fulfilling, and high-impact professional future. If you are ready to move beyond wishing to planning, our expertise is your essential foundation.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 sm:py-20" id="services">
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

      {/* MENTORIA PACKAGES */}
      <section className="bg-slate-50 py-16 sm:py-20" id="packages">
        <Container>
          <SectionHeading title="Mentoria's Plans" subtitle="Select the plan that fits your career aspirations." />
          <MentoriaTabs />
        </Container>
      </section>

      {/* TESTIMONIALS REMOVED AS REQUESTED */}

      {/* CONTACT US */}
      <section className="bg-slate-50 py-16 sm:py-20" id="contact">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeading title="Contact Us" subtitle="Let's build your custom career blueprint." />
            <div className="mt-8 space-y-4 text-slate-700 text-lg">
              <p>
                <strong>Email: </strong> 
                <a href="mailto:thomas2020vision@gmail.com" className="hover:text-[#001F3F] transition-colors">thomas2020vision@gmail.com</a>
              </p>
              <p>
                <strong>Phone: </strong> 
                <a href="tel:+919159005588" className="hover:text-[#001F3F] transition-colors">+91 9159005588</a>
              </p>
            </div>
          </div>
          <ContactForm endpoint="/api/contact" submitLabel="Send Message" />
        </Container>
      </section>
    </div>
  );
}
