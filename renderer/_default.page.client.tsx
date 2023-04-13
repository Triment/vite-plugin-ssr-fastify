/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QlClient } from '#root/helpers/client/index'
import React from 'react'
import { Root, createRoot, hydrateRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { Provider, SSRData, ssrExchange } from 'urql'
import 'virtual:windi.css'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'

export { render }
export const clientRouting = true //enable SPA

let root: Root
async function render(pageContext: PageContextClient & { data: SSRData }) {
  const { Page, pageProps, headers } = pageContext

  const isServerSide = typeof window === 'undefined'
  const ssrExc = ssrExchange({
    isClient: !isServerSide,
    initialState: !isServerSide ? window.__URQL_DATA__ : pageContext.data,
  })
  const client = QlClient({ ssrExc, headers }) //客户端headers ssr交换注入
  const page = (
    <Provider value={client}>
      <PageShell pageContext={pageContext}>
        <RecoilRoot>
          <Page {...pageProps} />
        </RecoilRoot>
      </PageShell>
    </Provider>
  )

  const container = document.getElementById('page-view')
  // SPA
  if ((container && container.innerHTML === '') || !pageContext.isHydration) {
    if (!root) {
      root = createRoot(container!)
    }
    root.render(page)
    // SSR
  } else {
    root = hydrateRoot(container!, page)
  }
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
