import Button from '~/components/Buttons'
import Input from '~/components/Input'
import { Description, SettingContainer, SettingTitle, Wrapper } from './styles'

interface SettingProps {
  title: string
  description: string
  onAction: Function
  type: 'text' | 'email' | 'delete'
  value?: string
  onChange?: Function
  children?: React.ReactNode
  style?: any
}

const Setting = (props: SettingProps) => {
  return (
    <SettingContainer style={props.style}>
      <SettingTitle>{props.title}</SettingTitle>
      <Description>{props.description}</Description>
      <div style={{ display: 'flex', marginTop: 'auto' }}>
        {props.type === 'text' && (
          <Input
            value={props.value}
            placeholder={props.value}
            type={props.type}
            onChange={props.onChange}
            style={{ marginRight: '10px' }}
          />
        )}
        <Button
          type={props.type === 'delete' ? 'danger' : 'secondary'}
          size="md"
          onClick={props.onAction}
        >
          {props.type === 'delete' ? 'Delete Account' : 'Save'}
        </Button>
      </div>
    </SettingContainer>
  )
}

export { Setting, Wrapper }
