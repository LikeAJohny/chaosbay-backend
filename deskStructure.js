export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
      S.listItem()
        .title('Announcement')
        .child(
          S.document().schemaType('announcement').documentId('announcement'),
        ),
      S.listItem()
        .title('Shows')
        .child(S.document().schemaType('shows').documentId('shows')),
      S.listItem()
        .title('About')
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Videos')
        .child(S.document().schemaType('videos').documentId('videos')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['settings', 'announcement', 'shows', 'about', 'videos'].includes(
            listItem.getId(),
          ),
      ),
    ]);
