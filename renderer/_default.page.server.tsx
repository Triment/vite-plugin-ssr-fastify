import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject } from 'vite-plugin-ssr'
import { RecoilRoot } from 'recoil'
import type { PageContextServer } from './types'
import { ClientContext } from 'graphql-hooks'
import { Client, getInitialState } from 'graphql-hooks-ssr'
const logoUrl = ''
export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'userState', 'initialState']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, userState, client } = pageContext

  const App = <ClientContext.Provider value={client}>
    <PageShell pageContext={pageContext}>
      <RecoilRoot >
        <Page {...pageProps} />
      </RecoilRoot>
    </PageShell>
  </ClientContext.Provider>
  const initialState = await getInitialState({ App, client: client as Client })
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
        // eslint-disable-next-line no-extra-boolean-cast
        <div id="page-view">${pageHtml}</div>
        <script type="text/javascript">
            window.__INITIAL_STATE__=${JSON.stringify(initialState).replace(
    /</g,
    '\\u003c'
  )};
          </script>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      userState,
      client
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
