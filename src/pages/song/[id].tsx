import { GetServerSideProps, NextPage } from 'next'
import { ReactNode } from 'react'
import Page from '~/components/Page'
import { Song } from '~/types'
import { getOrCreateSong } from '~/lib/songs'

interface Props {
  song: Song
  children: ReactNode
}

const SongDetail: NextPage = ({ song }: Props) => {
  console.log(song)
  return (
    <Page>
      <div>hey</div>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{
  props: { song: Song }
}> => {
  const songID = context.params.id as string
  const song = await getOrCreateSong(songID)
  return { props: { song } }
}

export default SongDetail
