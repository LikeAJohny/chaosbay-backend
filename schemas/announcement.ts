import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Announcement',
  name: 'announcement',
  type: 'document',
  fields: [
    defineField({ type: 'string', name: 'heading', title: 'Heading' }),
    defineField({ type: 'text', name: 'text', title: 'Text' }),
    defineField({ type: 'image', name: 'image', title: 'Image' }),
    defineField({ type: 'string', name: 'video', title: 'Video' }),
    defineField({ type: 'string', name: 'link', title: 'Link' }),
  ],
});
