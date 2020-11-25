import { providers, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { AuthForm, AuthProviders } from '~/components/AuthForm'
import Page, { Heading } from '~/components/Page'

interface Props {
  providers: AuthProviders
}

const Login = ({ providers }: Props) => {
  const [session] = useSession()
  const router = useRouter()

  if (session) {
    router.push('/account')
  }

  return (
    <Page>
      <Heading>Sign in to SONGTREE</Heading>
      <AuthForm providers={providers} />
    </Page>
  )
}

Login.getInitialProps = async () => {
  return {
    providers: await providers(),
  }
}

export default Login
