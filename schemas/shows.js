import { defineField } from 'sanity';
import show from './show';

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
      of: [show],
    }),
  ],
});
