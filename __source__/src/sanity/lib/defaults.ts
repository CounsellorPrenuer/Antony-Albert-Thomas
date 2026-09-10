export const defaultSiteSettings = {
  brandName: "Blueprint Advisors",
  tagline: "Career Guidance, Workshops & Seminars, Admission Guidance",
  description: "As strategic Career Architects, we transform career uncertainty into intentional, measurable success. In today's dynamic professional landscape, a traditional path is often insufficient.",
  email: "thomas2020vision@gmail.com",
  phone: "9159005588",
  address: "",
  whatsapp: "9159005588",
  footerNote: "© 2026 Blueprint Advisors. All rights reserved.",
  socialLinks: [],
};

export const defaultHomePage = {
  heroTitle: "Strategic Career Architects",
  heroSubtitle: "Blueprint Advisors",
  heroDescription: "Welcome to Blueprint Advisors. As strategic Career Architects, we transform career uncertainty into intentional, measurable success. We specialize in providing counselling to develop robust, custom-designed career blueprints that align your core strengths, market opportunities, and long-term vision.",
  heroCtaLabel: "Book a Session",
  heroCtaHref: "/book-session",
  heroImage: null,
  aboutTitle: "About Us",
  aboutText: "We don't just offer advice; we help you to explore the methodology and structure required to build a resilient, fulfilling, and high-impact professional future.",
  whyChooseUsTitle: "Why Choose Us",
  whyChooseUsItems: ["Career Guidance", "Workshops & Seminars", "Admission Guidance", "Measurable Success"],
  contactTitle: "Get In Touch",
  contactText: "Ready to build your career blueprint? Contact us today.",
};

export const defaultAboutPage = {
  title: "",
  subtitle: "",
  body: [],
  image: null,
};

export const defaultServices: Array<{
  _id: string;
  title: string;
  slug?: { current?: string };
  summary?: string;
  description?: string;
  image?: unknown;
  ctaLabel?: string;
  ctaHref?: string;
}> = [
  {
    _id: "service-1",
    title: "Career Guidance",
    summary: "Expert career counseling to help you discover and align your strengths with market opportunities.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    ctaLabel: "Learn More",
    ctaHref: "/#contact",
  },
  {
    _id: "service-2",
    title: "Workshops & Seminars",
    summary: "Engaging group sessions designed to build essential skills and prepare you for the professional landscape.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
    ctaLabel: "Learn More",
    ctaHref: "/#contact",
  },
  {
    _id: "service-3",
    title: "Admission Guidance",
    summary: "Strategic support for university and college admissions, ensuring your profile stands out.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    ctaLabel: "Learn More",
    ctaHref: "/#contact",
  }
];

export const defaultTestimonials: Array<{
  _id: string;
  name: string;
  role?: string;
  audience?: string;
  quote: string;
  rating?: number;
  image?: unknown;
  featured?: boolean;
}> = [];

export const defaultBlogPage = {
  title: "",
  subtitle: "",
};

export const defaultContactPage = {
  title: "",
  subtitle: "",
  formHeading: "",
  formDescription: "",
};

export const defaultBookPage = {
  title: "",
  subtitle: "",
  formHeading: "",
  formDescription: "",
};

export const defaultPackages = [
  { _id: "1", title: "Mentoria Standard (8-9 Students)", price: "₹ 5,500", target: "8-9 STUDENTS", planName: "Discover", features: ["Psychometric assessment to measure your interests", "1 career counselling session with Mentoria\\'s expert career coaches", "Lifetime access to Knowledge Gateway", "Invites to live webinars by industry experts"] },
  { _id: "2", title: "Mentoria Premium (8-9 Students)", price: "? 15,000", target: "8-9 STUDENTS", planName: "Discover plus+", features: ["Psychometric assessments to measure your interests, personality and abilities", "8 career counselling sessions (1 every year)", "Lifetime access to Knowledge Gateway", "Invites to live webinars by industry experts", "Customised reports after each session with education pathways", "Guidance on studying abroad", "CV building during internships/graduation"] },
  { _id: "3", title: "Mentoria Standard (10-12 Students)", price: "? 5,999", target: "10-12 STUDENTS", planName: "Achieve Online", features: ["Psychometric assessment to measure your interests, personality and abilities", "1 career counselling session", "Lifetime access to Knowledge Gateway", "Pre-recorded webinars by industry experts"] },
  { _id: "4", title: "Mentoria Premium (10-12 Students)", price: "? 10,599", target: "10-12 STUDENTS", planName: "Achieve Plus+", features: ["Psychometric assessment to measure your interests, personality and abilities", "4 career counselling sessions", "Lifetime access to Knowledge Gateway", "Attend live webinars by industry experts", "Customised reports after each session with education pathways", "Guidance on studying abroad", "CV reviews during internships/graduation"] },
  { _id: "5", title: "Mentoria Standard (College Graduates)", price: "? 6,499", target: "COLLEGE GRADUATES", planName: "Ascend Online", features: ["Psychometric assessment to measure your interests, personality and abilities", "1 career counselling session", "Lifetime access to Knowledge Gateway", "Pre-recorded webinars by industry experts"] },
  { _id: "6", title: "Mentoria Premium (College Graduates)", price: "? 10,599", target: "COLLEGE GRADUATES", planName: "Ascend Plus+", features: ["Psychometric assessment to measure your interests, personality and abilities", "3 career counselling sessions", "Lifetime access to Knowledge Gateway", "Attend live webinars by industry experts", "Customised reports after each session with education pathways", "Guidance on studying abroad", "CV reviews during internships/graduation"] }
];

