import Input from '~/components/Input'
import { Description, SettingContainer, Title } from './styles'

interface SettingProps {
  title: string
  description: string
  onSave: Function
  type: 'text' | 'email'
  value?: string
  onChange?: Function
  children?: React.ReactNode
}

const Setting = (props: SettingProps) => {
  return (
    <SettingContainer>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Input
        value={props.value}
        placeholder={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </SettingContainer>
  )
}

export { Setting }
