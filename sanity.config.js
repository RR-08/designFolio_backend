import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/index'
export default defineConfig({
  name: 'default',
  title: 'designFolio_rr08',

  projectId: '9o80zhac',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
