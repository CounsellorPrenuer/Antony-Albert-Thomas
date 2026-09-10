import { defineField, defineType } from "sanity";

export const testimonialsPage = defineType({
  name: "testimonialsPage",
  title: "Testimonials Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3 }),
  ],
  preview: {
    prepare: () => ({ title: "Testimonials Page" }),
  },
});
