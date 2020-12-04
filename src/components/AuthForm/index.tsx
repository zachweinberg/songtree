import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '~/components/Buttons'
import Icon from '~/components/Icon'
import Input from '~/components/Input'
import { registerReq } from '~/lib/api'
import {
  ButtonContainer,
  Container,
  EmailForm,
  Notification,
  OrDivider,
  ProvidersBox,
} from './styles'

export type AuthProviders = {
  [provider: string]: {
    id: string
    name: string
    type: string
    signinUrl: string
    callbackUrl: string
  }
}

interface Props {
  providers: AuthProviders
  signup?: boolean
}

const iconColors = {
  github: '#000',
  google: '#e94235',
  spotify: '#1DB954',
}

const AuthForm = ({ providers, signup }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState('')
  const router = useRouter()

  const submitForm = async (e) => {
    e.preventDefault()

    if (signup) {
      registerReq(email, password)
        .then(() => router.push('/login?state=SignupSuccess'))
        .catch((err) => setNotification(err.response.data.error))
    } else {
      signIn('credentials', { email, password })
    }
  }

  useEffect(() => {
    if (router.query?.state) {
      //TODO: enum these
      switch (router.query.state) {
        case 'InvalidLogin':
          setNotification('Woops! That is not a valid login.')
          break
        case 'SignupSuccess':
          setNotification(
            'Your account has been created. You can login below now!'
          )
          break
      }
    }
  }, [router.query])

  return (
    <Container>
      <ProvidersBox>
        {Object.values(providers)
          .filter((provider) => provider.id !== 'credentials')
          .map((provider) => (
            <ButtonContainer key={provider.name}>
              <Button
                block
                type="primary"
                size="md"
                onClick={() => signIn(provider.id)}
                bg={iconColors[provider.id]}
              >
                <Icon
                  name={provider.id}
                  size="20"
                  style={{ marginRight: '8px', fill: '#fff' }}
                />
                {signup ? 'Sign up' : 'Login'} with {provider.name}
              </Button>
            </ButtonContainer>
          ))}
        <OrDivider>Or {signup ? 'sign up' : 'login'} with email:</OrDivider>
      </ProvidersBox>

      <EmailForm onSubmit={submitForm}>
        {notification.length > 0 && <Notification>{notification}</Notification>}

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '13px' }}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '13px' }}
          required
        />
        <Button block size="md" type="primary">
          {signup ? 'Sign up with email' : 'Login with email'}
        </Button>
      </EmailForm>
    </Container>
  )
}

export { AuthForm }
