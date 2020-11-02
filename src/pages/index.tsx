import { NextPage } from 'next'
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page'

const Home: NextPage = () => {
  return (
    <Page>
      <SectionHeading>
        <Heading>SongThoughts!</Heading>
        <Subheading>What people think about songs</Subheading>
      </SectionHeading>
    </Page>
  )
}

export default Home
