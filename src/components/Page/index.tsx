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
  children: React.ReactElement | React.ReactElement[]
}

export default function Page(props: Props) {
  const { children } = props

  return (
    <Container>
      <Header />
      <InnerContainer>{children}</InnerContainer>
      <Footer />
    </Container>
  )
}
