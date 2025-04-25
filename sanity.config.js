
import { defineConfig } from 'sanity'

export default defineConfig({
  projectId: 'your_project_id',
  dataset: 'production',
  title: 'GoMange Studio',
  basePath: '/studio',
  schema: {
    types: [],
  },
})
