import Head from 'next/head'
import React from 'react'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import {
  Container,
  Heading,
  InnerContainer,
  SectionHeading,
  Subheading,
} from './styles'

export { SectionHeading, Heading, Subheading }

interface Props {
  children: React.ReactNode
  title: string
  hideFooter?: boolean
}

export default function Page(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title} | SONGTREE</title>
      </Head>
      <Container>
        <Header />
        <InnerContainer>{props.children}</InnerContainer>
        {props.hideFooter ? null : <Footer />}
      </Container>
    </>
  )
}
