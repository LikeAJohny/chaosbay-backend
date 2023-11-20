import { defineField, defineType } from "sanity";

export default defineType({
  title: "Videos",
  name: "videos",
  type: "document",
  fields: [
    defineField({
      title: "Headline",
      name: "headline",
      type: "string",
    }),
    defineField({
      title: "Video URLs",
      name: "videos",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
});
