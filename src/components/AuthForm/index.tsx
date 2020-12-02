import { signIn } from 'next-auth/client'
import Router from 'next/router'
import { useState } from 'react'
import Button from '~/components/Buttons'
import Icon from '~/components/Icon'
import Input from '~/components/Input'
import { register } from '~/lib/api'
import { ButtonContainer, Container, EmailForm, Error } from './styles'

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
  const [error, setError] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()

    if (signup) {
      register(email, password)
        .then(() => Router.push('/login'))
        .catch((err) => setError(err.response.data.error))
    } else {
      signIn('credentials', { email, password })
    }
  }

  return (
    <Container>
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
              Sign {signup ? 'up' : 'in'} with {provider.name}
            </Button>
          </ButtonContainer>
        ))}
      <EmailForm onSubmit={submitForm}>
        {error.length > 0 && <Error>{error}</Error>}
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
          {signup ? 'Sign up with email' : 'Sign in with email'}
        </Button>
      </EmailForm>
    </Container>
  )
}

export { AuthForm }
