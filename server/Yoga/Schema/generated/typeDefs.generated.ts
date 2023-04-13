import type { DocumentNode } from 'graphql'
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Post', loc: { start: 5, end: 9 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 14, end: 16 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ID', loc: { start: 18, end: 20 } },
            loc: { start: 18, end: 20 },
          },
          directives: [],
          loc: { start: 14, end: 20 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 23, end: 28 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 30, end: 36 } },
            loc: { start: 30, end: 36 },
          },
          directives: [],
          loc: { start: 23, end: 36 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'content', loc: { start: 39, end: 46 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 48, end: 54 } },
            loc: { start: 48, end: 54 },
          },
          directives: [],
          loc: { start: 39, end: 54 },
        },
      ],
      loc: { start: 0, end: 56 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 63, end: 71 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'getPost', loc: { start: 76, end: 83 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 84, end: 86 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ID', loc: { start: 88, end: 90 } },
                loc: { start: 88, end: 90 },
              },
              directives: [],
              loc: { start: 84, end: 90 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Post', loc: { start: 93, end: 97 } },
            loc: { start: 93, end: 97 },
          },
          directives: [],
          loc: { start: 76, end: 97 },
        },
      ],
      loc: { start: 58, end: 99 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Subscription', loc: { start: 105, end: 117 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'newMessage', loc: { start: 122, end: 132 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'roomId', loc: { start: 133, end: 139 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 141, end: 143 } },
                  loc: { start: 141, end: 143 },
                },
                loc: { start: 141, end: 144 },
              },
              directives: [],
              loc: { start: 133, end: 144 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Message', loc: { start: 147, end: 154 } },
              loc: { start: 147, end: 154 },
            },
            loc: { start: 147, end: 155 },
          },
          directives: [],
          loc: { start: 122, end: 155 },
        },
      ],
      loc: { start: 100, end: 157 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Message', loc: { start: 164, end: 171 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'from', loc: { start: 176, end: 180 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 182, end: 188 } },
            loc: { start: 182, end: 188 },
          },
          directives: [],
          loc: { start: 176, end: 188 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'body', loc: { start: 191, end: 195 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 197, end: 203 } },
            loc: { start: 197, end: 203 },
          },
          directives: [],
          loc: { start: 191, end: 203 },
        },
      ],
      loc: { start: 159, end: 205 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 211, end: 215 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 220, end: 222 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ID', loc: { start: 224, end: 226 } },
            loc: { start: 224, end: 226 },
          },
          directives: [],
          loc: { start: 220, end: 226 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 229, end: 233 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 235, end: 241 } },
            loc: { start: 235, end: 241 },
          },
          directives: [],
          loc: { start: 229, end: 241 },
        },
      ],
      loc: { start: 206, end: 243 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 250, end: 254 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 259, end: 261 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ID', loc: { start: 263, end: 265 } },
            loc: { start: 263, end: 265 },
          },
          directives: [],
          loc: { start: 259, end: 265 },
        },
      ],
      loc: { start: 245, end: 267 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 274, end: 278 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 283, end: 287 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 289, end: 295 } },
            loc: { start: 289, end: 295 },
          },
          directives: [],
          loc: { start: 283, end: 295 },
        },
      ],
      loc: { start: 269, end: 297 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 304, end: 312 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'genUser', loc: { start: 317, end: 324 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 325, end: 327 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ID', loc: { start: 329, end: 331 } },
                loc: { start: 329, end: 331 },
              },
              directives: [],
              loc: { start: 325, end: 331 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'User', loc: { start: 334, end: 338 } },
            loc: { start: 334, end: 338 },
          },
          directives: [],
          loc: { start: 317, end: 338 },
        },
      ],
      loc: { start: 299, end: 340 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 347, end: 352 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'getUser', loc: { start: 357, end: 364 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 365, end: 367 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ID', loc: { start: 369, end: 371 } },
                loc: { start: 369, end: 371 },
              },
              directives: [],
              loc: { start: 365, end: 371 },
            },
          ],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'User', loc: { start: 375, end: 379 } },
              loc: { start: 375, end: 379 },
            },
            loc: { start: 374, end: 380 },
          },
          directives: [],
          loc: { start: 357, end: 380 },
        },
      ],
      loc: { start: 342, end: 382 },
    },
  ],
  loc: { start: 0, end: 383 },
} as unknown as DocumentNode
