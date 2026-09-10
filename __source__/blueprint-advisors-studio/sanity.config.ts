import { defineConfig } from "sanity";
import { structureTool, StructureResolver } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/index";

const singletonTypes = new Set([
  "siteSettings",
  "homePage",
  "aboutPage",
  "servicesPage",
  "blogPage",
  "contactPage",
  "bookSessionPage",
  "testimonialsPage",
]);

const structure: StructureResolver = (S) =>
  S.list()
    .title("Blueprint Advisors CMS")
    .items([
      S.listItem().title("Hero Section").child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem().title("Homepage Content").child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem().title("About Page").child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem().title("Services").child(
        S.list()
          .title("Services")
          .items([
            S.listItem().title("Services Page").child(S.document().schemaType("servicesPage").documentId("servicesPage")),
            S.documentTypeListItem("service").title("Service Items"),
          ])
      ),
      S.listItem().title("Testimonials").child(
        S.list()
          .title("Testimonials")
          .items([
            S.listItem().title("Testimonials Page").child(S.document().schemaType("testimonialsPage").documentId("testimonialsPage")),
            S.documentTypeListItem("testimonial").title("Testimonial Entries"),
          ])
      ),
      S.listItem().title("Blog").child(
        S.list()
          .title("Blog")
          .items([
            S.listItem().title("Blog Page").child(S.document().schemaType("blogPage").documentId("blogPage")),
            S.documentTypeListItem("post").title("Blog Posts"),
          ])
      ),
      S.listItem().title("Contact Details").child(
        S.list()
          .title("Contact")
          .items([
            S.listItem().title("Site Settings").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.listItem().title("Contact Page").child(S.document().schemaType("contactPage").documentId("contactPage")),
            S.listItem().title("Book Session Page").child(S.document().schemaType("bookSessionPage").documentId("bookSessionPage")),
          ])
      ),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return !id || !singletonTypes.has(id);
      }),
    ]);

export default defineConfig({
  name: "default",
  title: "Blueprint Advisors Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "7ms99gfl",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
