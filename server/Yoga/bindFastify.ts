import { FastifyInstance } from 'fastify'
import { Socket } from 'net'
import { YogaApp } from './App'
import { useServer } from 'graphql-ws/lib/use/ws'
import { WebSocketServer } from 'ws'
export function bindFastify(app: FastifyInstance) {
  app.route({
    url: '/graphql',
    method: ['GET', 'POST', 'OPTIONS'],
    handler: async (req, reply) => {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await YogaApp.handleNodeRequest(req, {
        req,
        reply,
      })
      response.headers.forEach((value, key) => {
        reply.header(key, value)
      })
      reply.status(response.status)
      reply.send(response.body)

      return reply
    },
  })
  const wsServer = new WebSocketServer({
    server: app.server,
    path: YogaApp.graphqlEndpoint,
  })

  useServer(
    {
      execute: (args: any) => args.rootValue.execute(args),
      subscribe: (args: any) => args.rootValue.subscribe(args),
      onSubscribe: async (ctx, msg) => {
        const { schema, execute, subscribe, contextFactory, parse, validate } =
          YogaApp.getEnveloped({
            ...ctx,
            req: ctx.extra.request,
            socket: ctx.extra.socket,
            params: msg.payload,
          })

        const args = {
          schema,
          operationName: msg.payload.operationName,
          document: parse(msg.payload.query),
          variableValues: msg.payload.variables,
          contextValue: await contextFactory(),
          rootValue: {
            execute,
            subscribe,
          },
        }

        const errors = validate(args.schema, args.document)
        if (errors.length) return errors
        return args
      },
    },
    wsServer,
  )

  const sockets = new Set<Socket>()
  app.server.on('connection', (socket) => {
    sockets.add(socket)
    app.server.once('close', () => sockets.delete(socket))
  })
}
