import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "string" }),
    defineField({ name: "heroDescription", title: "Hero Description", type: "text", rows: 4 }),
    defineField({ name: "heroCtaLabel", title: "Hero CTA Label", type: "string", initialValue: "Book a Free Career Call" }),
    defineField({ name: "heroCtaHref", title: "Hero CTA Link", type: "string", initialValue: "/book-session" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "aboutTitle", title: "Homepage About Title", type: "string" }),
    defineField({ name: "aboutText", title: "Homepage About Text", type: "text", rows: 3 }),
    defineField({ name: "whyChooseUsTitle", title: "Why Choose Us Heading", type: "string" }),
    defineField({ name: "whyChooseUsItems", title: "Why Choose Us Points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "contactTitle", title: "Homepage Contact Heading", type: "string" }),
    defineField({ name: "contactText", title: "Homepage Contact Text", type: "text", rows: 3 }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage Content" }),
  },
});
