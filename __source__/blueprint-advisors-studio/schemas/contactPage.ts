import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3 }),
    defineField({ name: "formHeading", title: "Form Heading", type: "string" }),
    defineField({ name: "formDescription", title: "Form Description", type: "text", rows: 3 }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Page" }),
  },
});
