import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession, useSession } from 'next-auth/client'
import Page from '~/components/Page'

const Account: NextPage = () => {
  const [session] = useSession()

  return (
    <Page title="Your Account" hideFooter>
      {session ? <p>{session.user.username}</p> : null}
    </Page>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession({ req: ctx.req })

  if (!session) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }
  return { props: {} }
}

export default Account
