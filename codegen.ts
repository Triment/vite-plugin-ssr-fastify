import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'
import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: '**/schema.graphql',
  documents: ['pages/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    'server/Yoga/Schema': defineConfig(),
    './helpers/gql/': {
      preset: 'client'
    }
  }
}
export default config