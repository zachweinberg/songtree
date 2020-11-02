import type { AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import Providers from '~/components/Providers'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SongTree</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}

export default MyApp
