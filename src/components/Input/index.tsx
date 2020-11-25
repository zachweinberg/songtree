import * as React from 'react'
import { Input as StyledInput, StyledTextArea } from './styles'

interface Props {
  value: string
  onChange: Function
  placeholder: string
  type: 'text' | 'search' | 'password'
  disabled?: boolean
  textarea?: boolean
  centerText?: boolean
  style?: any
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
    />
  )

export default Input
