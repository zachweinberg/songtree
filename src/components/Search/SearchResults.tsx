import { Song } from '~/types'
import { SearchEpisodeContainer } from './style'

const ResultItem = ({ song }: { song: Song }) => {
  return (
    <SearchEpisodeContainer>
      <p>{song.name}</p>
    </SearchEpisodeContainer>
  )
}

interface Props {
  results: Song[]
}

const SearchResults = ({ results }: Props) => {
  return results.map((song) => <ResultItem song={song} key={song.name} />)
}

export default SearchResults
