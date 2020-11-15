import { GetServerSideProps, NextPage } from 'next'
import { ReactNode } from 'react'
import Page from '~/components/Page'
import SongView from '~/components/SongView'
import { getOrCreateSong } from '~/lib/songs'
import { Song } from '~/types'

interface Props {
  song: Song
  children: ReactNode
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{
  props: { song: Song }
}> => {
  const songID = context.params.id as string
  const song = await getOrCreateSong(songID)
  song.createdAt = (song.createdAt as Date).toISOString()
  return { props: { song } }
}

const SongDetail: NextPage = ({ song }: Props) => {
  return (
    <Page>
      <SongView song={song} />
    </Page>
  )
}

export default SongDetail
