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
        <SongInfo key={song.id}>
          <Link href={`/song/${song.id}`}>
            <a>
              <AlbumArt src={song.albumArtUrl} />
            </a>
          </Link>
          <SongTitle>{song.name}</SongTitle>
          <SongArtist>{song.artist}</SongArtist>
        </SongInfo>
      ))}
    </Grid>
  )
}

export default SongGrid
