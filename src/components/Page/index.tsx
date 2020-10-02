import * as React from 'react'
import {
  Container,
  SectionHeading,
  Heading,
  Subheading,
  InnerContainer,
} from './style'

export { SectionHeading, Heading, Subheading }

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

export default function Page(props: Props) {
  const { children } = props

  return (
    <Container>
      {/* <Header /> */}
      <InnerContainer>{children}</InnerContainer>
    </Container>
  )
}
