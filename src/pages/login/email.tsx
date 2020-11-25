import { NextPage } from 'next'
import EmailAuthForm from '~/components/Auth/EmailAuthForm'
import Page, { Heading } from '~/components/Page'

const LoginEmail: NextPage = () => {
  return (
    <Page>
      <Heading>Log in to SONGTREE</Heading>
      <EmailAuthForm />
    </Page>
  )
}

export default LoginEmail
