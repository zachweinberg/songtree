import { signIn } from 'next-auth/client'
import { useState } from 'react'
import Button from '~/components/Buttons'
import Input from '~/components/Input'
import { Container } from './styles'

const EmailAuthForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = () => {
    signIn('credentials', { email, password })
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '13px' }}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '13px' }}
      />
      <Button block size="md" type="primary" onClick={submitForm}>
        Login
      </Button>
    </Container>
  )
}

export default EmailAuthForm
