export default {
    title: 'Current Album',
    name: 'album',
    type: 'document',
    fields: [
        { type: 'string', name: 'catchPhrase', title: 'Catch Phrase' },
        { type: 'string', name: 'albumName', title: 'Album Name' },
        { type: 'image', name: 'albumArtwork', title: 'Album Artwork' },
        { type: 'string', name: 'albumLink', title: 'Album Link' },
        { type: 'string', name: 'buttonText', title: 'Mobile Button Text' },

        {
            type: 'boolean',
            name: 'useButton',
            title: 'Mobile Button',
            description:
                'Wenn gechecked, werden Album Artwork und Catch Phrase erst angezeigt, wenn der Nutzer auf den Button klickt.',
        },
    ],
};
