import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
    defineField({ type: 'string', name: 'heading', title: 'Heading' }),
    defineField({ type: 'image', name: 'mainImage', title: 'About Image' }),
    defineField({
      title: 'About Text',
      type: 'text',
      name: 'text',
    }),
    defineField({ title: 'Quote', name: 'quote', type: 'text' }),
  ],
});
