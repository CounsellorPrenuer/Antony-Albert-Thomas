import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getSiteSettings } from "@/sanity/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blueprint Advisors | Strategic Career Architects",
  description:
    "Blueprint Advisors transforms career uncertainty into intentional, measurable success with strategic guidance and counseling.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar brandName={settings.brandName} />
        <main>{children}</main>
        <Footer
          brandName={settings.brandName}
          tagline={settings.tagline}
          email={settings.email}
          phone={settings.phone}
          address={settings.address}
          note={settings.footerNote}
        />
      </body>
    </html>
  );
}
