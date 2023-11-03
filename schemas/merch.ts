import { defineField, defineType } from 'sanity';
import merchItem from './merch-item';

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
