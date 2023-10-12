export default {
  title: 'Announcement',
  name: 'announcement',
  type: 'document',
  fields: [
    { type: 'string', name: 'heading', title: 'Heading' },
    { type: 'text', name: 'text', title: 'Text' },
    { type: 'image', name: 'image', title: 'Image' },
    { type: 'string', name: 'video', title: 'Video' },
    { type: 'string', name: 'link', title: 'Link' }
  ]
};
