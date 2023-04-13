/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  signUp?: Maybe<User>
}

export type MutationSignUpArgs = {
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  signIn?: Maybe<SignResponse>
}

export type QuerySignInArgs = {
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

export type SignResponse = {
  __typename?: 'SignResponse'
  token?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>

export type MyQueryQuery = {
  __typename?: 'Query'
  signIn?: { __typename?: 'SignResponse'; token?: string | null } | null
}

export const MyQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MyQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signIn' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: { kind: 'StringValue', value: '', block: false },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'StringValue', value: '', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'token' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>
