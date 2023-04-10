/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QlClient } from '#root/helpers/client/index'
import { ClientContext } from 'graphql-hooks'
import React from 'react'
import { Root, createRoot, hydrateRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import 'virtual:windi.css'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'

export { render }
export const clientRouting = true//enable SPA

let root: Root
async function render(pageContext: PageContextClient & { initialState: object }) {
  const { Page, pageProps, initialState } = pageContext

  const client = QlClient({ initialState })
  const page = <ClientContext.Provider value={client}>
    <PageShell pageContext={pageContext}>
      <RecoilRoot>
        <Page {...pageProps} />
      </RecoilRoot>
    </PageShell>
  </ClientContext.Provider>

  const container = document.getElementById('page-view')
  // SPA
  if (container && container.innerHTML === '' || !pageContext.isHydration) {
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
