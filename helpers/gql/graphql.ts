/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  body?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  genUser?: Maybe<User>;
  getPost?: Maybe<Post>;
};


export type MutationGenUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationGetPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: Message;
};


export type SubscriptionNewMessageArgs = {
  roomId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};
