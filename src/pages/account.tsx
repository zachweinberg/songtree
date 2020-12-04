import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession, useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import { Setting, Wrapper } from '~/components/Account'
import Flash from '~/components/Flash'
import Page from '~/components/Page'
import { updateUsernameReq } from '~/lib/api'

const Account: NextPage = () => {
  const [session, loading] = useSession()
  const [username, setUsername] = useState('')
  const [notification, setNotification] = useState('')

  useEffect(() => {
    if (!loading) {
      setUsername(session.user.username)
    }
  }, [loading])

  const onUpdateUsername = () => {
    updateUsernameReq(username)
      .then(() => setNotification('Username successfully changed!'))
      .catch((err) => alert(err.response.data.error))
  }

  return loading ? null : (
    <Page title="Your Account" hideFooter>
      <div style={{ maxWidth: '1000px' }}>
        {username.includes('user-') && (
          <Flash
            type="notification"
            message=" Looks like you have not chosen a custom username yet! You can set one
        below."
          />
        )}
        {notification.length > 0 && (
          <Flash type="success" message={notification} />
        )}

        <Wrapper>
          <Setting
            title="Change Username"
            description="Your username appears on song comments that you write."
            type="text"
            onAction={onUpdateUsername}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Setting
            title="Delete Account"
            description="Your comments on all songs will be deleted."
            type="delete"
            onAction={() => alert('This doesnt work yet :]')}
          />
        </Wrapper>
      </div>
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
