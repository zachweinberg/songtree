import { Song } from '~/types'
import {
  ResultsContainer,
  ResultItem,
  AlbumArtwork,
  SongInfo,
  SongTitle,
  SongArtist,
} from './style'

interface Props {
  songs: Song[]
}

const SearchResults = ({ songs }: Props) => {
  return (
    <ResultsContainer>
      {songs.map((song) => (
        <ResultItem key={song.id}>
          <AlbumArtwork src={song.albumArtUrl} />
          <SongInfo>
            <SongTitle>{song.name}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </SongInfo>
        </ResultItem>
      ))}
    </ResultsContainer>
  )
}

export default SearchResults
