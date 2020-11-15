import { NextPage, GetServerSideProps } from 'next'
import { ReactNode } from 'react'
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page'
import SongGrid from '~/components/SongGrid'
import { Song } from '~/types'
import { getRecentSongs } from '~/lib/songs'

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
        <SongGrid songs={recentSongs} />
      </SectionHeading>
    </Page>
  )
}

export default Home
