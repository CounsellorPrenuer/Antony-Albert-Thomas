import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getContactPage, getSiteSettings } from "@/sanity/lib/content";

export const metadata = {
  title: "Contact | Blueprint Advisors",
  description: "Get in touch with Blueprint Advisors for counseling and career planning.",
};

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getContactPage(), getSiteSettings()]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-8 md:grid-cols-2">
        <div>
          <SectionHeading title={page.title} subtitle={page.subtitle} />
          <div className="space-y-2 text-sm text-slate-600">
            <p>Email: {settings.email}</p>
            <p>Phone: {settings.phone}</p>
            <p>Address: {settings.address}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#001F3F]">{page.formHeading}</h2>
          <p className="mt-2 text-sm text-slate-600">{page.formDescription}</p>
          <div className="mt-4">
            <ContactForm endpoint="/api/contact" submitLabel="Send Message" />
          </div>
        </div>
      </Container>
    </section>
  );
}
