import { signin, signout, useSession } from 'next-auth/client'
import Link from 'next/link'
import Button from '~/components/Buttons'
import Search from './Search'
import { AuthContainer, Container, Logo, LogoContainer } from './styles'

const Header = () => {
  const [session, loading] = useSession()

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
            <Button type="secondary" size="md" onClick={() => signin()}>
              Login
            </Button>
            <Button type="primary" size="md" style={{ marginLeft: '8px' }}>
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
