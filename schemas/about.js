export default {
    title: "About",
    name: "about",
    type: "document",
    fields: [
        { type: "string", name: "heading", title: "Heading" },
        { type: "image", name: "mainImage", title: "About Image" },
        {
            title: "About Text",
            type: "maintext",
            name: "text",
        },
        { title: "Quote", name: "quote", type: "maintext" },
    ],
};
