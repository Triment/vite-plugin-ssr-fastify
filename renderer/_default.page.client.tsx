/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'virtual:windi.css'
import React from 'react'
import { hydrateRoot, createRoot, Root } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'
import { RecoilRoot } from 'recoil'

export { render }
export const clientRouting = true//enable SPA

let root: Root
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext

  const page = <PageShell pageContext={pageContext}>
    <RecoilRoot>
      <Page {...pageProps} />
    </RecoilRoot>
  </PageShell>

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
