import { signIn } from 'next-auth/client'
import Router from 'next/router'
import Button from '~/components/Buttons'
import Icon from '~/components/Icon'
import { AuthProviders } from './index'
import { ButtonContainer, Container } from './styles'
interface Props {
  providers: AuthProviders
}

const iconColors = {
  github: '#000',
  google: '#e94235',
  spotify: '#1DB954',
}

const LoginButtons = ({ providers }: Props) => {
  return (
    <Container>
      {Object.values(providers).map((provider) => (
        <ButtonContainer key={provider.name}>
          <Button
            block
            type="primary"
            size="md"
            onClick={() =>
              provider.id === 'credentials'
                ? Router.push('/login/email')
                : signIn(provider.id)
            }
            bg={iconColors[provider.id]}
          >
            <Icon
              name={provider.id}
              size="20"
              style={{ marginRight: '8px', fill: '#fff' }}
            />
            Sign in with {provider.name}
          </Button>
        </ButtonContainer>
      ))}
    </Container>
  )
}

export default LoginButtons
