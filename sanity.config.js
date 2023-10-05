import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  title: "Chaosbay",
  projectId: "8me5yfa8",
  dataset: "dev",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  tools: (prev) => {
    return import.meta.env.DEV
      ? prev
      : prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schemas,
  },
});
