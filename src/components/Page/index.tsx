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
  innerWidth?: string
}

export default function Page(props: Props) {
  const { children, innerWidth } = props

  return (
    <Container>
      <Header />
      <InnerContainer width={innerWidth}>{children}</InnerContainer>
      <Footer />
    </Container>
  )
}
