import * as React from 'react'
import { Input as StyledInput, StyledTextArea } from './styles'

interface Props {
  value: string
  onChange: Function
  placeholder: string
  type: 'text' | 'search' | 'password' | 'email'
  disabled?: boolean
  textarea?: boolean
  centerText?: boolean
  style?: any
  required?: boolean
}

const Input = ({
  value,
  onChange,
  placeholder,
  type,
  disabled,
  textarea,
  centerText,
  style,
  required,
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
      centerText={centerText}
      style={style}
      required={required}
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
      centerText={centerText}
      style={style}
      required={required}
    />
  )

export default Input
