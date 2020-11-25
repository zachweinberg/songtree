import { providers, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { AuthProviders } from '~/components/Auth'
import LoginButtons from '~/components/Auth/LoginButtons'
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
      <Heading>Log in to SONGTREE</Heading>
      <LoginButtons providers={providers} />
    </Page>
  )
}

Login.getInitialProps = async () => {
  return {
    providers: await providers(),
  }
}

export default Login
