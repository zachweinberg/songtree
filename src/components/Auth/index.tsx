import LoginButtons from './LoginButtons'
import SignupButtons from './SignupButtons'

export type AuthProviders = {
  [provider: string]: {
    id: string
    name: string
    type: string
    signinUrl: string
    callbackUrl: string
  }
}

export { LoginButtons, SignupButtons }
