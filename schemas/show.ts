import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'show',
  title: 'Show',
  type: 'object',
  fields: [
    defineField({ type: 'string', name: 'name', title: 'Name' }),
    defineField({
      type: 'string',
      name: 'location',
      title: 'Location',
    }),
    defineField({ type: 'date', name: 'date', title: 'Date' }),
    defineField({
      type: 'string',
      name: 'ticketLink',
      title: 'Ticket Link',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      location: 'location',
      date: 'date',
    },
    prepare({ name, location, date }) {
      return {
        title: `${date} ${name}, ${location}`,
      };
    },
  },
});
