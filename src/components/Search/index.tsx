import { useCallback, useState } from 'react'
import axios from 'axios'
import debounce from 'lodash/debounce'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import { Container } from './style'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchTracks = async (query: string) => {
    const { data } = await axios.post('/api/search', { searchTerm: query })
    setResults(data)
  }

  const debouncedSearch = useCallback(
    debounce((q) => searchTracks(q), 260),
    []
  )

  const onChange = (e: any) => {
    const { value } = e.target

    setSearchTerm(value)

    if (value.length > 0) {
      debouncedSearch(value)
    } else {
      setSearchTerm('')
      setResults([])
    }
  }

  return (
    <Container>
      <SearchInput onChange={onChange} value={searchTerm} />
      {results && results.length > 0 && <SearchResults songs={results} />}
    </Container>
  )
}

export default Search
