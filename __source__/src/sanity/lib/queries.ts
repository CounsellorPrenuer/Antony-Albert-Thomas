import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  brandName,
  tagline,
  description,
  email,
  phone,
  address,
  whatsapp,
  footerNote,
  socialLinks
}`;

export const homePageQuery = groq`*[_type == "homePage"][0]{
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroCtaLabel,
  heroCtaHref,
  heroImage,
  aboutTitle,
  aboutText,
  whyChooseUsTitle,
  whyChooseUsItems,
  contactTitle,
  contactText
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  title,
  subtitle,
  body,
  image
}`;

export const servicesPageQuery = groq`*[_type == "servicesPage"][0]{
  title,
  subtitle
}`;

export const allServicesQuery = groq`*[_type == "service"] | order(order asc, _createdAt desc){
  _id,
  title,
  slug,
  summary,
  description,
  image,
  ctaLabel,
  ctaHref
}`;

export const testimonialsPageQuery = groq`*[_type == "testimonialsPage"][0]{
  title,
  subtitle
}`;

export const allTestimonialsQuery = groq`*[_type == "testimonial"] | order(order asc, _createdAt desc){
  _id,
  name,
  role,
  audience,
  quote,
  rating,
  image,
  featured
}`;

export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(order asc, _createdAt desc)[0...3]{
  _id,
  name,
  role,
  audience,
  quote,
  rating,
  image,
  featured
}`;

export const blogPageQuery = groq`*[_type == "blogPage"][0]{
  title,
  subtitle
}`;

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  author,
  publishedAt,
  body,
  seoTitle,
  seoDescription
}`;

export const recentPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  author,
  publishedAt,
  seoTitle,
  seoDescription
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  author,
  publishedAt,
  body,
  seoTitle,
  seoDescription
}`;

export const contactPageQuery = groq`*[_type == "contactPage"][0]{
  title,
  subtitle,
  formHeading,
  formDescription
}`;

export const bookingPageQuery = groq`*[_type == "bookSessionPage"][0]{
  title,
  subtitle,
  formHeading,
  formDescription
}`;

export const allPackagesQuery = groq`*[_type == "package"] | order(_createdAt asc)`;
