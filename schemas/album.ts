import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Current Album',
  name: 'album',
  type: 'document',
  fields: [
    defineField({ type: 'string', name: 'catchPhrase', title: 'Catch Phrase' }),
    defineField({ type: 'string', name: 'albumName', title: 'Album Name' }),
    defineField({
      type: 'image',
      name: 'albumArtwork',
      title: 'Album Artwork',
    }),
    defineField({ type: 'string', name: 'albumLink', title: 'Album Link' }),
    defineField({
      type: 'string',
      name: 'buttonText',
      title: 'Mobile Button Text',
    }),
    defineField({
      type: 'boolean',
      name: 'useButton',
      title: 'Mobile Button',
      description:
        'Wenn gechecked, werden Album Artwork und Catch Phrase erst angezeigt, wenn der Nutzer auf den Button klickt.',
    }),
  ],
});
