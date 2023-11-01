import { defineArrayMember } from 'sanity';

export default {
  title: 'Videos',
  name: 'videos',
  type: 'document',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      required: true,
    },
    {
      title: 'Video IDs',
      name: 'videoIds',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Test',
      name: 'test',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tag',
          fields: [
            { type: 'string', name: 'label' },
            { type: 'string', name: 'value' },
          ],
        }),
      ],
    },
  ],
};
