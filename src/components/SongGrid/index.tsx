import Link from 'next/link'
import React from 'react'
import { Song } from '~/types'
import { AlbumArt, Grid, SongArtist, SongInfo, SongTitle } from './styles'

interface Props {
  songs: Song[]
}

const SongGrid = ({ songs }: Props) => {
  return (
    <Grid>
      {songs.map((song) => (
        <Link href={`/song/${song.id}`} key={song.id}>
          <SongInfo>
            <AlbumArt src={song.albumArtUrl} />
            <SongTitle>{song.name}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </SongInfo>
        </Link>
      ))}
    </Grid>
  )
}

export default SongGrid
