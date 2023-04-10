import { applyMiddleware } from 'graphql-middleware'
import { allow, shield } from 'graphql-shield'
import { schema } from '../Schema'


const permissions = shield({
  Query: {
    '*': allow
  },
  Mutation: {
    '*': allow
  },
  Subscription: {
    '*': allow
  }
},
{
  fallbackRule: allow,
  allowExternalErrors: true,
}
)

export const AuthenticationSchema = applyMiddleware(schema, permissions)