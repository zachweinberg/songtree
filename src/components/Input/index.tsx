import * as React from 'react'
import { Input as StyledInput } from './styles'

interface Props {
  value: string
  onChange: Function
  placeholder: string
  type: 'text' | 'search'
}

const Input = ({ value, onChange, placeholder, type }: Props) => (
  <StyledInput
    type={type}
    value={value}
    onChange={(e) => {
      onChange(e)
    }}
    placeholder={placeholder}
  />
)

export default Input
