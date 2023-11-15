import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import deskStructure from "./deskStructure";
import { colorInput } from "@sanity/color-input";

export default defineConfig({
  name: "default",
  title: "Chaosbay Relaunch",

  projectId: "2vsqsxqy",
  dataset: "production",

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
  ],

  tools: (prev) => {
    // @ts-ignore
    return import.meta.env.DEV
      ? prev
      : prev.filter((tool) => tool.name !== "vision");
  },

  schema: {
    types: schemaTypes,
  },
});
