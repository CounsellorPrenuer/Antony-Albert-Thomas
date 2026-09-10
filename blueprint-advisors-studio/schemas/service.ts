import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 1 }),
  ],
  preview: {
    select: { title: "title", subtitle: "summary" },
  },
});
