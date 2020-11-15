import axios from 'axios'
import debounce from 'lodash/debounce'
import Router from 'next/router'
import { useCallback, useState } from 'react'
import Input from '~/components/Input'
import SearchResults from './SearchResults'
import { Container } from './styles'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchTracks = async (query: string) => {
    const { data } = await axios.post('/api/search', { searchTerm: query })
    setResults(data)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setResults([])
  }

  Router.events.on('routeChangeComplete', clearSearch)

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
        onChange={onChange}
        value={searchTerm}
        aria-label="search"
        placeholder="Search for songs, artists and albums"
        type="search"
      />
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
