import { providers, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { AuthProviders } from '~/components/Auth'
import LoginButtons from '~/components/Auth/LoginButtons'
import Page, { Heading, Subheading } from '~/components/Page'

interface Props {
  providers: AuthProviders
}

const Register = ({ providers }: Props) => {
  const [session] = useSession()
  const router = useRouter()

  if (session) {
    router.push('/account')
  }

  return (
    <Page>
      <Heading>Sign up for SONGTREE</Heading>
      <Subheading>We hope you like music! 🎸</Subheading>
      <LoginButtons providers={providers} signup />
    </Page>
  )
}

Register.getInitialProps = async () => {
  return {
    providers: await providers(),
  }
}

export default Register
