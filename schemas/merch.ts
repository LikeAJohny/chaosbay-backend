import { defineArrayMember, defineField, defineType } from 'sanity';

const merchItem = defineArrayMember({
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

export default defineType({
  name: 'merch',
  title: 'Merch',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'merchItems',
      title: 'Merch Items',
      type: 'array',
      of: [merchItem],
    }),
  ],
});
