import { useCallback, useState } from 'react'
import axios from 'axios'
import debounce from 'lodash/debounce'
import OutsideSearchClick from './OutsideSearchClick'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import { Container, AlbumArtwork } from './style'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchTracks = async (q) => {
    const { data } = await axios.post('/api/search', { searchTerm: q })
    console.log(data)
    setResults(data)
  }

  const debouncedSearch = useCallback(
    debounce((q) => searchTracks(q), 460),
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
  const clearSearch = () => setSearchTerm('')

  return (
    <Container>
      <OutsideSearchClick onOutsideClick={clearSearch}>
        <SearchInput onChange={onChange} value={searchTerm} />
        {results && results.length > 0 && <SearchResults results={results} />}
      </OutsideSearchClick>
    </Container>
  )
}

export default Search
