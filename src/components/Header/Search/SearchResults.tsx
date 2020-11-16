import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Song } from '~/types'
import {
  AlbumArtwork,
  ResultItem,
  ResultsContainer,
  SongArtist,
  SongInfo,
  SongTitle,
} from './styles'

interface Props {
  songs: Song[]
  onClick: () => void
  onOutsideClick: () => void
}

const renderSongResults = (songs: Song[]) => {
  return songs.map((song) => (
    <Link href={`/song/${song.id}`} key={song.id}>
      <ResultItem>
        <AlbumArtwork src={song.albumArtUrl} />
        <SongInfo>
          <SongTitle>{song.name}</SongTitle>
          <SongArtist>{song.artist}</SongArtist>
        </SongInfo>
      </ResultItem>
    </Link>
  ))
}

const SearchResults = ({ songs, onOutsideClick }: Props) => {
  const ref = useRef(null)

  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      return
    }
    onOutsideClick()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
  return (
    <ResultsContainer ref={ref}>{renderSongResults(songs)}</ResultsContainer>
  )
}

export default SearchResults
