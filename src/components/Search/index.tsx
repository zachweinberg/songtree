import { useState } from 'react'
import { Container } from './style'
import OutsideSearchClick from './OutsideSearchClick'
import SearchInput from './SearchInput'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onChange = (e: any) => setSearchTerm(e.target.value)
  const clearSearch = () => setSearchTerm('')

  return (
    <Container>
      <OutsideSearchClick onOutsideClick={clearSearch}>
        <SearchInput onChange={onChange} />
      </OutsideSearchClick>
    </Container>
  )
}

export default Search
