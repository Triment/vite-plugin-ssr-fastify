import { QlClient } from '#root/helpers/client'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import prepass from 'react-ssr-prepass'
import { RecoilRoot } from 'recoil'
import { Provider, ssrExchange } from 'urql'
import { escapeInject } from 'vite-plugin-ssr'
import { PageShell } from './PageShell'
import type { PageContextServer } from './types'
const logoUrl = ''
export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'userState', 'initialState', 'headers', 'data']

async function render(pageContext: PageContextServer) {
  const { 
    Page, 
    pageProps, 
    initialState, 
    userState, 
    headers } = pageContext

  const ssrExc = ssrExchange({ isClient: false, initialState })
  const urqlClient = QlClient({ ssrExc, headers })

  const App = <Provider value={urqlClient}>
    <PageShell pageContext={pageContext}>
      <RecoilRoot >
        <Page {...pageProps} />
      </RecoilRoot>
    </PageShell>
  </Provider>
  await prepass(App)

  const data = ssrExc.extractData()
  const pageHtml = Page !== undefined ? ReactDOMServer.renderToStaticNodeStream(App) : ''
  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${pageHtml}</div>
        <script type="text/javascript">
          window.__URQL_DATA__ = ${JSON.stringify(data)}
        </script>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {//此处的context会在每个页面的server端获取
      userState,
      data,
      headers
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
