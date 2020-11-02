import Link from 'next/link'
import { SongSearchResult } from '~/types'
import {
  ResultsContainer,
  ResultItem,
  AlbumArtwork,
  SongInfo,
  SongTitle,
  SongArtist,
} from './styles'

interface Props {
  songs: SongSearchResult[]
}

const renderSongResults = (songs: SongSearchResult[]) => {
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

const SearchResults = ({ songs }: Props) => {
  return <ResultsContainer>{renderSongResults(songs)}</ResultsContainer>
}

export default SearchResults
