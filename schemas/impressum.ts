import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Impressum',
  name: 'impressum',
  type: 'document',
  fields: [
    defineField({
      title: 'Impressum',
      type: 'text',
      name: 'text',
    }),
  ],
});
