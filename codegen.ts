import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'
import type { CodegenConfig } from '@graphql-codegen/cli'
const config: CodegenConfig = {
  schema: '**/schema.graphql',
  documents: ['pages/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    'server/Yoga/Schema/generated': defineConfig({
      typesPluginsConfig: {
        mappers: {//此处放置prisma映射到user
          User: '.prisma/client#User as UserModel'
        },
        inputMaybeValue: 'undefined | T',
        contextType: '../contextType.js#ContextDef'
      }
    }),
    // './helpers/gql/': {
    //   preset: 'client',
    // }
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
  watch: true,
}
export default config
