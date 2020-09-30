import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

// TODO: Finish SEO
const SeoDetails = {
  title: 'SongThoughts',
  description: 'A database of thoughts related to specific songs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    site_name: 'SongThoughts',
    images: [
      {
        url: '',
        alt: '',
      },
    ],
  },
  twitter: {
    handle: '@brian_lovin',
    site: '@brian_lovin',
    cardType: 'summary_large_image',
  },
}
const SEO = () => {
  return (
    <>
      <DefaultSeo {...SeoDetails} />
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/static/meta/manifest.json" />
      </Head>
    </>
  )
}

export default SEO