import { defineArrayMember, defineField } from "sanity";

const showItem = defineArrayMember({
  name: "show",
  title: "Show",
  type: "object",
  fields: [
    defineField({ type: "string", name: "name", title: "Location / Name" }),
    defineField({
      type: "string",
      name: "location",
      title: "City / Country",
    }),
    defineField({ type: "date", name: "date", title: "Date" }),
    defineField({
      type: "string",
      name: "ticketLink",
      title: "Ticket Link",
    }),
  ],
  preview: {
    select: {
      name: "name",
      location: "location",
      date: "date",
    },
    prepare({ name, location, date }) {
      return {
        title: `${date} ${name}, ${location}`,
      };
    },
  },
});

export default defineField({
  name: "shows",
  title: "Shows",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "limit",
      title: "Limit",
      type: "number",
    }),
    defineField({
      name: "shows",
      title: "Shows",
      type: "array",
      of: [showItem],
    }),
  ],
});
