export default {
    title: "Media",
    name: "media",
    type: "document",
    fields: [
        {
            title: "Images",
            name: "images",
            type: "array",
            of: [{ type: "image" }],
        },
        {
            title: "Video Links",
            name: "videoLinks",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
