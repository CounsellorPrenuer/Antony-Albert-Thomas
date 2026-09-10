import { defineField, defineType } from "sanity";

export const packagePlan = defineType({
  name: "package",
  title: "Packages",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Package Title", type: "string" }),
    defineField({ name: "target", title: "Target Audience", type: "string" }),
    defineField({ name: "planName", title: "Plan Name", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ 
      name: "features", 
      title: "Features", 
      type: "array",
      of: [{ type: "string" }]
    }),
  ]
});
