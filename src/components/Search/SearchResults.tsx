import Link from 'next/link'
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
}

const SearchResults = ({ songs }: Props) => {
  return (
    <ResultsContainer>
      {songs.map((song) => (
        <Link href="https://google.com" key={song.id}>
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
      ))}
    </ResultsContainer>
  )
}

export default SearchResults
