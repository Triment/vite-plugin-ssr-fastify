import { globalConfig } from '#root/global.config'
import compress from '@fastify/compress'
import fastifyCookie from '@fastify/cookie'
import middie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import fastifyWebsocket from '@fastify/websocket'
import fastify from 'fastify'
import { JwtPayload, verify } from 'jsonwebtoken'
import path from 'path'
import { SSRData } from 'urql'
import vite from 'vite'
import { renderPage } from 'vite-plugin-ssr'
import { bindFastify } from './Yoga/bindFastify'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = fastify()
  app.register(fastifyWebsocket)
  await app.register(fastifyCookie, {
    secret: "my-secret", // for cookies signature
    hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
    parseOptions: {}  // options for parsing cookies
  })
  await app.register(middie)
  await app.register(compress)
  //yoga with ws
  bindFastify(app)

  if (isProduction) {
    const distPath = path.join(root, '/dist/client/assets')
    app.register(fastifyStatic, {
      root: distPath,
      prefix: '/assets/',
    })
  } else {
    const viteServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
    await app.use(viteServer.middlewares)
  }
  app.use(async (req, reply, next) => {
    next()
  })
  app.get('*', async (req, reply) => {
    //if
    //console.log(req.headers.authorization)
    //graphql client
    //用户状态
    let payload: string | JwtPayload = ''
    if(req.cookies.token){
      payload = verify(req.cookies.token, globalConfig.TOKEN_SERCERT)
    }
    const userInfo = payload
    //urql客户端状态
    const initialState: SSRData = {}
    const headers = { authorization: 'token' }
    const redirectTo = '' //登录的关键地方
    const pageContextInit = {
      urlOriginal: req.url,
      userInfo,
      initialState,
      headers,
      redirectTo,
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (pageContext.redirectTo) {
      reply.redirect(307, pageContext.redirectTo)
    } else if (!httpResponse) {
      return reply.code(404).type('text/html').send('Not Found')
    } else {
      httpResponse.pipe(reply.raw)
      return reply
    }
    //const { statusCode, contentType } = httpResponse
    //return reply.status(statusCode).type(contentType).send(await httpResponse.getNodeStream())
  })

  const port: number = process.env.PORT ? +process.env.PORT : 4000

  app.listen({ port })

  console.log(`Server running at http://localhost:${port}`)
}
