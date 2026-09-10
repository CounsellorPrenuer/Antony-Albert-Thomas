export const defaultSiteSettings = {
  brandName: "",
  tagline: "",
  description: "",
  email: "",
  phone: "",
  address: "",
  whatsapp: "",
  footerNote: "",
  socialLinks: [],
};

export const defaultHomePage = {
  heroTitle: "",
  heroSubtitle: "",
  heroDescription: "",
  heroCtaLabel: "",
  heroCtaHref: "/book-session",
  heroImage: null,
  aboutTitle: "",
  aboutText: "",
  whyChooseUsTitle: "",
  whyChooseUsItems: [],
  contactTitle: "",
  contactText: "",
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
}> = [];

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
