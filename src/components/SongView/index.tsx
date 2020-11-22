import React from 'react'
import { Song } from '~/types'
import CommentBox from './CommentBox'
import SongReactions from './SongReactions'
import {
  AlbumArt,
  Description,
  Grid,
  Sidebar,
  SongInfo,
  SongTitle,
} from './styles'
interface Props {
  song: Song
}

const SongView = ({ song }: Props) => {
  return (
    <Grid>
      <Sidebar>
        <AlbumArt src={song.albumArtUrl} />
        <SongReactions song={song} />
      </Sidebar>
      <SongInfo>
        <SongTitle>{song.name}</SongTitle>
        <Description>By {song.artist}</Description>
        <Description>
          {song.album} ({song.releaseYear})
        </Description>
        <CommentBox />
      </SongInfo>
    </Grid>
  )
}

export default SongView
