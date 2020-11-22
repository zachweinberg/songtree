import * as React from 'react'
import { Input as StyledInput, StyledTextArea } from './styles'

interface Props {
  value: string
  onChange: Function
  placeholder: string
  type: 'text' | 'search'
  disabled?: boolean
  textarea?: boolean
}

const Input = ({
  value,
  onChange,
  placeholder,
  type,
  disabled,
  textarea,
}: Props) =>
  textarea ? (
    <StyledTextArea
      type={type}
      value={value}
      onChange={(e) => {
        onChange(e)
      }}
      disabled={disabled}
      placeholder={placeholder}
    />
  ) : (
    <StyledInput
      type={type}
      value={value}
      onChange={(e) => {
        onChange(e)
      }}
      disabled={disabled}
      placeholder={placeholder}
    />
  )

export default Input
