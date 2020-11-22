import { ButtonContainer } from './styles'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonType = 'primary' | 'secondary'

interface Props {
  type: ButtonType
  size: ButtonSize
  disabled?: boolean
  style?: any
  children: React.ReactNode
  onClick?: () => any
  bg?: string
  block?: boolean
}

const Button = (props: Props) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}

export default Button
