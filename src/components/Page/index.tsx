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
}

export default function Page(props: Props) {
  return (
    <Container>
      <Header />
      <InnerContainer>{props.children}</InnerContainer>
      <Footer />
    </Container>
  )
}
