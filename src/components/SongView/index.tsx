import React from 'react'
import { Heading } from '~/components/Page'
import { Song } from '~/types'
import { SongInfo, AlbumArt, Description } from './styles'

interface Props {
  song: Song
}

const SongView = ({ song }: Props) => {
  return (
    <SongInfo>
      <AlbumArt src={song.albumArtUrl} />
      <div>
        <Heading>{song.name}</Heading>
        <Description>{song.artist}</Description>
      </div>
    </SongInfo>
  )
}

export default SongView
