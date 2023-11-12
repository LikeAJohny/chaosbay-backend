import { defineArrayMember, defineField } from 'sanity';

const showItem = defineArrayMember({
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

export default defineField({
  name: 'shows',
  title: 'Shows',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    defineField({
      name: 'shows',
      title: 'Shows',
      type: 'array',
      of: [showItem],
    }),
  ],
});
