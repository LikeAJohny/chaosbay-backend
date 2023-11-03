import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'merchItem',
  title: 'Merch Item',
  type: 'object',
  fields: [
    defineField({ type: 'string', name: 'name', title: 'Name' }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
    }),
    defineField({
      type: 'url',
      name: 'link',
      title: 'Link',
    }),
  ],
});
