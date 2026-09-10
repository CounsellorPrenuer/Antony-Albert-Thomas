import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Founder" },
  { href: "/#services", label: "Services" },
  { href: "/#packages", label: "Mentoria Packages" },
  { href: "/#contact", label: "Contact Us" },
];

type NavbarProps = {
  brandName?: string;
};

export function Navbar({ brandName }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-[#001F3F]">
          <Image src="/Antony-Albert-Thomas/logo.png" alt="Blueprint Advisors Logo" width={150} height={40} className="object-contain max-h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-[#001F3F]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#001F3F", color: "#ffffff" }}
        >
          Book a Session
        </Link>
      </Container>
    </header>
  );
}
