import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBookPage } from "@/sanity/lib/content";

export const metadata = {
  title: "Book a Session | Blueprint Advisors",
  description: "Book a personalized career counseling session with Blueprint Advisors.",
};

export default async function BookSessionPage() {
  const page = await getBookPage();

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-8 md:grid-cols-2">
        <div>
          <SectionHeading title={page.title} subtitle={page.subtitle} />
          <p className="text-sm text-slate-600">{page.formDescription}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#001F3F]">{page.formHeading}</h2>
          <div className="mt-4">
            <ContactForm endpoint="/api/book-session" submitLabel="Request Booking" />
          </div>
        </div>
      </Container>
    </section>
  );
}
