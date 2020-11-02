import * as React from 'react'
import { Input } from './styles'

interface Props {
  value: string
  onChange: Function
  placeholder: string
  type: 'text' | 'search'
}

export default ({ value, onChange, placeholder, type }: Props) => (
  <Input
    type={type}
    value={value}
    onChange={(e) => {
      onChange(e)
    }}
    placeholder={placeholder}
  />
)
