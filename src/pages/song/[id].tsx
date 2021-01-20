import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
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
  return { props: { song } }
}

const SongDetail: NextPage = ({ song }: Props) => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={`  ${song.name} by ${song.artist} - SONGTREE`}
        />
        <meta
          property="og:description"
          content={`SONGTREE is a database of songs backed by Spotify`}
        />
        <meta property="og:image" content={song.albumArtUrl} />
        <meta
          property="og:url"
          content={`https://songtree.app/song/${song.id}}`}
        />
      </Head>
      <Page title={`${song.name} by ${song.artist}`}>
        <SongView song={song} />
      </Page>
    </>
  )
}

export default SongDetail
