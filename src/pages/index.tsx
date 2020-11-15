import { GetServerSideProps, NextPage } from 'next'
import { ReactNode } from 'react'
import Page, { Heading, SectionHeading, Subheading } from '~/components/Page'
import SongGrid from '~/components/SongGrid'
import { getRecentSongs } from '~/lib/songs'
import { Song } from '~/types'

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { recentSongs: Song[] }
}> => {
  const recentSongs = await getRecentSongs()
  recentSongs.forEach((song) => {
    song.createdAt = (song.createdAt as Date).toISOString()
  })
  return { props: { recentSongs } }
}

interface Props {
  recentSongs: Song[]
  children: ReactNode
}

const Home: NextPage = ({ recentSongs }: Props) => {
  return (
    <Page>
      <SectionHeading>
        <Heading>SONGTREE</Heading>
        <Subheading>Recently Added Songs</Subheading>
      </SectionHeading>
      <SongGrid songs={recentSongs} />
    </Page>
  )
}

export default Home
