import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

// TODO: Finish SEO
const SeoDetails = {
  title: 'SONGTREE',
  description: 'A database of songs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    site_name: 'SONGTREE',
    images: [
      {
        url: '',
        alt: '',
      },
    ],
  },
}

const SEO = () => {
  return (
    <>
      <DefaultSeo {...SeoDetails} />
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
      </Head>
    </>
  )
}

export default SEO
