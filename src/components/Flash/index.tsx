import * as React from 'react'
import { Wrapper } from './styles'

interface Props {
  type: 'success' | 'notification' | 'alert'
  message: string
}

const Flash = ({ type, message }: Props) => (
  <Wrapper type={type}>{message}</Wrapper>
)

export default Flash
