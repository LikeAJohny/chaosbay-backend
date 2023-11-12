import { defineArrayMember, defineField } from 'sanity';

export default defineField({
  title: 'Text',
  name: 'richText',
  type: 'array',
  of: [defineArrayMember({ type: 'block' })],
});
