import axios from 'axios'
import debounce from 'lodash/debounce'
import { useCallback, useState } from 'react'
import Input from '~/components/Input'
import Loader from '~/components/Loader'
import SearchResults from './SearchResults'
import { Container } from './styles'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)

  const searchTracks = async (query: string) => {
    setSearching(true)
    const { data } = await axios.post('/api/search', { searchTerm: query })
    setResults(data)

    // Small delay to allow the user to see the spinner
    // in case the request resolves super fast
    setTimeout(() => setSearching(false), 200)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setResults([])
  }

  const debouncedSearch = useCallback(
    debounce((q) => searchTracks(q), 200),
    []
  )

  const onChange = (e: any) => {
    const { value } = e.target
    setSearchTerm(value)

    if (value.length > 0) {
      debouncedSearch(value)
    } else {
      clearSearch()
    }
  }

  return (
    <Container>
      <Input
        centerText
        onChange={onChange}
        value={searchTerm}
        aria-label="search"
        placeholder="Search for songs, artists and albums"
        type="text"
      />
      {searching && (
        <div
          style={{
            position: 'absolute',
            right: '10px',
            top: `calc(50% - 10px)`,
          }}
        >
          <Loader />
        </div>
      )}
      {results && results.length > 0 && (
        <SearchResults
          onOutsideClick={clearSearch}
          onClick={() => setResults([])}
          songs={results}
        />
      )}
    </Container>
  )
}

export default Search
