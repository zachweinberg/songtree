import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession, useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import { Setting } from '~/components/Account'
import Page from '~/components/Page'

const Account: NextPage = () => {
  const [session, loading] = useSession()
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (!loading) {
      setUsername(session.user.username)
    }
  }, [loading])

  return loading ? null : (
    <Page title="Your Account" hideFooter>
      {/* {username.includes('user-') && <p>Choose a unique username!</p>} */}
      <Setting
        title="Change Username"
        description="Your username will appear on song comments"
        type="text"
        onSave={() => null}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
