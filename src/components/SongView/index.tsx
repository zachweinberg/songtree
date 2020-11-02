import React from 'react'
import { Song } from '~/types'
import { SongInfo, SongTitle, AlbumArt, Description } from './styles'
// import AlbumIcon from '~/components/Icons/AlbumIcon'

interface Props {
  song: Song
}

const SongView = ({ song }: Props) => {
  return (
    <SongInfo>
      <AlbumArt src={song.albumArtUrl} />
      <div>
        <SongTitle>{song.name}</SongTitle>
        <Description>By {song.artist}</Description>
        <Description>
          From {song.album} ({song.releaseYear})
        </Description>
      </div>
    </SongInfo>
  )
}

export default SongView
