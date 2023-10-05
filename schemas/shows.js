export default {
  title: "Shows",
  name: "shows",
  type: "document",
  fields: [
    { type: "string", name: "name", title: "Name" },
    { type: "string", name: "location", title: "Location" },
    { type: "date", name: "date", title: "Date" },
    { type: "string", name: "ticketLink", title: "Ticket Link" },
  ],
  orderings: [
    {
      title: "Show Date",
      name: "showDateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};
