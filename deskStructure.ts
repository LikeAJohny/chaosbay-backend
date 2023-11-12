import { StructureBuilder } from 'sanity/lib/exports/desk';

export default (S: StructureBuilder) =>
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
        .title('Videos')
        .child(S.document().schemaType('videos').documentId('videos')),
      S.listItem()
        .title('Merch')
        .child(S.document().schemaType('merch').documentId('merch')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['settings', 'announcement', 'shows', 'videos', 'merch'].includes(
            listItem.getId(),
          ),
      ),
    ]);
