import { GetServerSidePropsContext } from 'next'
import { getSession, providers, useSession } from 'next-auth/client'
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
    <Page title="Login">
      <Heading>Sign in to SONGTREE</Heading>
      <AuthForm providers={providers} />
    </Page>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession({ req: ctx.req })

  if (session) {
    ctx.res.writeHead(302, { Location: '/account' })
    ctx.res.end()
  }

  return {
    props: { providers: await providers() },
  }
}

export default Login
