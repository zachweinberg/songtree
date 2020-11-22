import { AuthProviders } from './index'

interface Props {
  providers: AuthProviders
}

const SignupButtons = ({ providers }: Props) => {
  return Object.values(providers).map((provider) => (
    <div key={provider.name}>
      {/* <button onClick={() => signIn(provider.id)}>
        Sign in with {provider.name}
      </button> */}
    </div>
  ))
}

export default SignupButtons
