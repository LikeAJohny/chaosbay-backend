export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
      S.listItem()
        .title('Announcement')
        .child(S.document().schemaType('announcement').documentId('announcement')),
      S.listItem()
        .title('About')
        .child(S.document().schemaType('about').documentId('about')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings', 'announcement', 'about'].includes(listItem.getId())
      )
    ]);
