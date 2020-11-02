import { GetServerSideProps, NextPage } from 'next'
import { ReactNode } from 'react'
import Page from '~/components/Page'
import { Song } from '~/types'

interface Props {
  song: Song
  children: ReactNode
}

const SongDetail: NextPage = ({ song }: Props) => {
  return (
    <Page>
      <div>{song.artist}</div>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { song: Song }
}> => {
  return { props: { song: { artist: 'hy' } } }
}

export default SongDetail
