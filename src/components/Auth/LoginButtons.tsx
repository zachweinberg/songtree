import { signIn } from 'next-auth/client'
import Button from '~/components/Buttons'
import { AuthProviders } from './index'
import { ButtonContainer, Container } from './styles'

interface Props {
  providers: AuthProviders
}

const providerIcons = {
  github: '',
}

const LoginButtons = ({ providers }: Props) => {
  return (
    <Container>
      {Object.values(providers).map((provider) => (
        <ButtonContainer key={provider.name}>
          <Button
            block
            type="secondary"
            size="md"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </Button>
        </ButtonContainer>
      ))}
    </Container>
  )
}

export default LoginButtons
