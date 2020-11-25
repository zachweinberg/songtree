import { signout, useSession } from 'next-auth/client'
import Link from 'next/link'
import Router from 'next/router'
import Button from '~/components/Buttons'
import Search from './Search'
import { AuthContainer, Container, Logo, LogoContainer } from './styles'

const Header = () => {
  const [session] = useSession()

  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <Logo>SONGTREE</Logo>
        </Link>
      </LogoContainer>
      <AuthContainer>
        {!session ? (
          <>
            <Button
              onClick={() => Router.push('/login')}
              type="secondary"
              size="md"
            >
              Login
            </Button>
            <Button style={{ marginLeft: '10px' }} type="primary" size="md">
              Sign up
            </Button>
          </>
        ) : (
          <Button type="secondary" size="md" onClick={() => signout()}>
            Sign Out
          </Button>
        )}
      </AuthContainer>
      <Search />
    </Container>
  )
}

export default Header
