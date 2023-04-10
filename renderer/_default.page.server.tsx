import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject } from 'vite-plugin-ssr'
import { RecoilRoot } from 'recoil'
import type { PageContextServer } from './types'
import { Provider, ssrExchange } from 'urql'
import prepass from 'react-ssr-prepass'
import { QlClient } from '#root/helpers/client'
const logoUrl = ''
export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'userState', 'initialState']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, userState } = pageContext

  const ssrExc = ssrExchange({ isClient: false })
  const client = QlClient({ ssrExc })

  const App = <Provider value={client}>
    <PageShell pageContext={pageContext}>
      <RecoilRoot >
        <Page {...pageProps} />
      </RecoilRoot>
    </PageShell>
  </Provider>
  await prepass(App)

  const data = JSON.stringify(ssrExc.extractData())
  console.log(data)
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
          window.__URQL_DATA__ = ${data}
        </script>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      userState,
      data
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
