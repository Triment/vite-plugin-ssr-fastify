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

export type Message = {
  __typename?: 'Message'
  body?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  genUser?: Maybe<User>
  getPost?: Maybe<Post>
}

export type MutationGenUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type MutationGetPostArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type Post = {
  __typename?: 'Post'
  content?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  getUser: Array<User>
}

export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type Subscription = {
  __typename?: 'Subscription'
  newMessage: Message
}

export type SubscriptionNewMessageArgs = {
  roomId: Scalars['ID']
}

export type User = {
  __typename?: 'User'
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type UserQueryVariables = Exact<{ [key: string]: never }>

export type UserQuery = {
  __typename?: 'Query'
  getUser: Array<{ __typename?: 'User'; id?: string | null; name?: string | null }>
}

export const UserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'User' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'StringValue', value: '', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>
