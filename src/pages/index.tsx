import { NextPage } from 'next'
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page'

const Home: NextPage = () => {
  return (
    <Page>
      <SectionHeading>
        <Heading>SongTree</Heading>
        <Subheading>Song Database 🎹</Subheading>
      </SectionHeading>
    </Page>
  )
}

export default Home
