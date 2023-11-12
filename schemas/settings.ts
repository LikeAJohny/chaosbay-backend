import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Settings',
  name: 'settings',
  type: 'document',
  fields: [
    defineField({
      type: 'color',
      name: 'primaryColor',
      title: 'Primary Color',
    }),
    defineField({
      type: 'color',
      name: 'secondaryColor',
      title: 'Secondary Color',
    }),
    defineField({ type: 'image', name: 'logo', title: 'Logo' }),
    defineField({ type: 'image', name: 'lettering', title: 'Lettering' }),
  ],
});
