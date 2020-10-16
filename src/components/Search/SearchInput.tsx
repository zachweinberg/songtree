import * as React from 'react'
import { Input } from './style'

interface Props {
  onChange: Function
}

const SearchInput = ({ onChange }: Props) => (
  <Input
    type="search"
    // value={currentRefinement}
    onFocus={onChange}
    onChange={(e) => {
      onChange(e)
      // refine(e.target.value)
    }}
    placeholder="Search for music"
    aria-label="Search"
  />
)

export default SearchInput
