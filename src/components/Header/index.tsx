import { signOut, useSession } from 'next-auth/client'
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
            <Button
              onClick={() => Router.push('/register')}
              style={{ marginLeft: '10px' }}
              type="primary"
              size="md"
            >
              Sign up
            </Button>
          </>
        ) : (
          <Button
            type="secondary"
            size="md"
            onClick={() =>
              signOut({ callbackUrl: `${process.env.NEXTAUTH_URL}/login` })
            }
          >
            Sign Out
          </Button>
        )}
      </AuthContainer>
      <Search />
    </Container>
  )
}

export default Header
