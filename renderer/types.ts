export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }

import { SSRData } from 'urql'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
// import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router' // When using Client Routing
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client' // When using Server Routing

type Page = (pageProps: PageProps) => React.ReactElement
type PageProps = {}

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
  userState?: { [key: string]: unknown }
  headers: Headers //Headers for urql client
  initialState: SSRData //Server Side Rendering State
  redirectTo?: string
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom & { headers: Headers }
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer
