import { ButtonContainer } from './styles'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonType = 'primary' | 'secondary'

interface Props {
  type: ButtonType
  size: ButtonSize
  disabled?: boolean
  style?: any
  children: React.ReactChild
  onClick?: () => any
}

const Button = (props: Props) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}

export default Button
