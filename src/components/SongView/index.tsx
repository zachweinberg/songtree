import React from 'react'
import { Song } from '~/types'
import SongReactions from '~/components/SongReactions'
import {
  SongInfo,
  SongTitle,
  AlbumArt,
  Description,
  Sidebar,
  Grid,
} from './styles'

interface Props {
  song: Song
}

const SongView = ({ song }: Props) => {
  return (
    <Grid>
      <Sidebar>
        <AlbumArt src={song.albumArtUrl} />
        {/* <SongReactions song={song} /> */}
      </Sidebar>
      <SongInfo>
        <SongTitle>{song.name}</SongTitle>
        <Description>By {song.artist}</Description>
        <Description>
          From {song.album} ({song.releaseYear})
        </Description>
      </SongInfo>
    </Grid>
  )
}

export default SongView
