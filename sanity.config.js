import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/index';
import deskStructure from './deskStructure';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';

export default defineConfig({
  title: 'Chaosbay',
  projectId: '8me5yfa8',
  dataset: 'dev',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
  ],
  tools: (prev) => {
    return import.meta.env.DEV
      ? prev
      : prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemas,
  },
});
