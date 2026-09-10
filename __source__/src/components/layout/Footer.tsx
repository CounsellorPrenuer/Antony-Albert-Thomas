import Link from "next/link";
import { Container } from "@/components/ui/Container";

type FooterProps = {
  brandName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  note?: string;
};

export function Footer({ brandName, tagline, email, phone, address, note }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-[#001F3F]">{brandName || "Brand"}</h3>
            {tagline && <p className="mt-2 text-sm text-slate-600">{tagline}</p>}
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#001F3F]">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#001F3F]">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              {email && <p>{email}</p>}
              {phone && <p>{phone}</p>}
              {address && <p>{address}</p>}
            </div>
          </div>
        </div>
        {note && <p className="mt-8 text-xs text-slate-500">{note}</p>}
      </Container>
    </footer>
  );
}
