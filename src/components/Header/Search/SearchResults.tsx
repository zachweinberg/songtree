import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { Song } from '~/types'
import {
  ResultsContainer,
  ResultItem,
  AlbumArtwork,
  SongInfo,
  SongTitle,
  SongArtist,
} from './styles'

interface Props {
  songs: Song[]
  onClick: () => void
  onOutsideClick: () => void
}

const renderSongResults = (songs: Song[]) => {
  return songs.map((song) => (
    <Link href={`/song/${song.id}`} key={song.id}>
      <a>
        <ResultItem>
          <AlbumArtwork src={song.albumArtUrl} />
          <SongInfo>
            <SongTitle>{song.name}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </SongInfo>
        </ResultItem>
      </a>
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
