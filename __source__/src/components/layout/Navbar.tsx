import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

type NavbarProps = {
  brandName?: string;
};

export function Navbar({ brandName }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-[#001F3F]">
          {brandName || "Brand"}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-[#001F3F]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book-session"
          className="rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#001F3F", color: "#ffffff" }}
        >
          Book a Session
        </Link>
      </Container>
    </header>
  );
}
