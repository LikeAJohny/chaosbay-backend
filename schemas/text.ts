import { defineArrayMember, defineField } from 'sanity';

export default defineField({
  title: 'Text',
  name: 'text',
  type: 'array',
  of: [defineArrayMember({ type: 'block' })],
});
