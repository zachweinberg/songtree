import * as React from 'react'
import { Input } from './styles'

interface Props {
  value: string
  onChange: Function
}

const SearchInput = ({ value, onChange }: Props) => (
  <Input
    type="search"
    value={value}
    onChange={(e) => {
      onChange(e)
    }}
    placeholder="Search for songs, artists or albums..."
    aria-label="Search"
  />
)

export default SearchInput
