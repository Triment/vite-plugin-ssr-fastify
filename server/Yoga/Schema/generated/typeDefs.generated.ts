import type { DocumentNode } from 'graphql'
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 5, end: 9 } },
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
          name: { kind: 'Name', value: 'name', loc: { start: 23, end: 27 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 29, end: 35 } },
            loc: { start: 29, end: 35 },
          },
          directives: [],
          loc: { start: 23, end: 35 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'avatarUrl', loc: { start: 38, end: 47 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 49, end: 55 } },
            loc: { start: 49, end: 55 },
          },
          directives: [],
          loc: { start: 38, end: 55 },
        },
      ],
      loc: { start: 0, end: 57 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'SignResponse', loc: { start: 64, end: 76 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'token', loc: { start: 81, end: 86 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 88, end: 94 } },
            loc: { start: 88, end: 94 },
          },
          directives: [],
          loc: { start: 81, end: 94 },
        },
      ],
      loc: { start: 59, end: 96 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 103, end: 111 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'signUp', loc: { start: 116, end: 122 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'email', loc: { start: 123, end: 128 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 130, end: 136 } },
                  loc: { start: 130, end: 136 },
                },
                loc: { start: 130, end: 137 },
              },
              directives: [],
              loc: { start: 123, end: 137 },
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'password', loc: { start: 139, end: 147 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 149, end: 155 } },
                  loc: { start: 149, end: 155 },
                },
                loc: { start: 149, end: 156 },
              },
              directives: [],
              loc: { start: 139, end: 156 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'User', loc: { start: 159, end: 163 } },
            loc: { start: 159, end: 163 },
          },
          directives: [],
          loc: { start: 116, end: 163 },
        },
      ],
      loc: { start: 98, end: 165 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 172, end: 177 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'signIn', loc: { start: 182, end: 188 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'email', loc: { start: 189, end: 194 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'String', loc: { start: 196, end: 202 } },
                loc: { start: 196, end: 202 },
              },
              directives: [],
              loc: { start: 189, end: 202 },
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'password', loc: { start: 204, end: 212 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'String', loc: { start: 214, end: 220 } },
                loc: { start: 214, end: 220 },
              },
              directives: [],
              loc: { start: 204, end: 220 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SignResponse', loc: { start: 223, end: 235 } },
            loc: { start: 223, end: 235 },
          },
          directives: [],
          loc: { start: 182, end: 235 },
        },
      ],
      loc: { start: 167, end: 237 },
    },
  ],
  loc: { start: 0, end: 238 },
} as unknown as DocumentNode
