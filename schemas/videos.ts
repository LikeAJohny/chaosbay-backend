import { defineArrayMember, defineField, defineType } from 'sanity';

const videoItem = defineArrayMember({
  type: 'object',
  name: 'tag',
  fields: [
    { type: 'string', name: 'label' },
    { type: 'string', name: 'value' },
  ],
});

export default defineType({
  title: 'Videos',
  name: 'videos',
  type: 'document',
  fields: [
    defineField({
      title: 'Headline',
      name: 'headline',
      type: 'string',
      required: true,
    }),
    defineField({
      title: 'Video IDs',
      name: 'videoIds',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      title: 'Test',
      name: 'test',
      type: 'array',
      of: [videoItem],
    }),
  ],
});
