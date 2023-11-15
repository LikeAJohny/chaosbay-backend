import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "seo",
  title: "SEO",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      name: "additionalTitle",
      title: "Additional Title",
    }),
    defineField({
      type: "string",
      name: "searchResultTitle",
      title: "Search Result Title",
    }),
    defineField({
      type: "text",
      name: "searchResultDescription",
      title: "Search Result Description",
    }),
    defineField({
      type: "image",
      name: "socialPreviewImage",
      title: "Social Media Preview Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: "image",
      name: "pageIcon",
      title: "Page Icon",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: "string",
      name: "location",
      title: "Location",
    }),
    defineField({
      type: "object",
      name: "currentRelease",
      title: "Current Release",
      fields: [
        defineField({
          type: "string",
          name: "name",
          title: "Name",
        }),
        defineField({
          type: "string",
          name: "type",
          title: "Type",
        }),
        defineField({
          type: "string",
          name: "genre",
          title: "Genre",
        }),
        defineField({
          type: "url",
          name: "url",
          title: "URL",
        }),
        defineField({
          type: "number",
          name: "tracks",
          title: "Tracks",
        }),
        defineField({
          type: "image",
          name: "cover",
          title: "Cover",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});
