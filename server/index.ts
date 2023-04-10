import { globalConfig } from '#root/global.config'
import { QlClient } from '#root/helpers/client/index'
import compress from '@fastify/compress'
import middie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import fastifyWebsocket from '@fastify/websocket'
import fastify from 'fastify'
import { makeHandler } from 'graphql-ws/lib/use/@fastify/websocket'
import { useServer } from 'graphql-ws/lib/use/ws'
import path from 'path'
import vite from 'vite'
import { renderPage } from 'vite-plugin-ssr'
import { schema } from './Yoga/Schema/index'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = fastify()

  app.register(fastifyWebsocket)

  app.register(async (fastify) => {
    fastify.get(globalConfig.GRAPHQL_PATH, { websocket: true }, makeHandler({ schema }))
  })

  await app.register(middie)
  await app.register(compress)

  if (isProduction) {
    const distPath = path.join(root, '/dist/client/assets')
    app.register(fastifyStatic, {
      root: distPath,
      prefix: '/assets/'
    })
  } else {
    const viteServer = await vite.createServer({
      root,
      server: { middlewareMode: true }
    })
    await app.use(viteServer.middlewares)
  }

  app.get('*', async (req, reply) => {
    //graphql client
    const client = QlClient({ headers: { 'x-c': '8989' }})
    const userState = {
      id: 1
    }
    const pageContextInit = {
      urlOriginal: req.url,
      userState,
      client
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext

    if (!httpResponse) {
      return reply.code(404).type('text/html').send('Not Found')
    }
    httpResponse.pipe(reply.raw)
    return reply
    //const { statusCode, contentType } = httpResponse
    //return reply.status(statusCode).type(contentType).send(await httpResponse.getNodeStream())
  })

  const port: number = process.env.PORT ? +process.env.PORT : 4000

  app.listen({ port })

  console.log(`Server running at http://localhost:${port}`)
}
