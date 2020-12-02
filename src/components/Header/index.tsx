import { signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '~/components/Buttons'
import Icon from '~/components/Icon'
import Search from './Search'
import {
  AuthContainer,
  Container,
  HomeNav,
  Logo,
  LogoContainer,
} from './styles'

const Header = () => {
  const router = useRouter()
  const [session] = useSession()

  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <HomeNav>
            <Logo>SONGTREE</Logo>
            {router.pathname !== '/' && (
              <Icon
                name="home"
                size="19px"
                style={{ fill: '#fff', marginLeft: '10px' }}
              />
            )}
          </HomeNav>
        </Link>
      </LogoContainer>
      <AuthContainer>
        {!session ? (
          <>
            <Button
              onClick={() => router.push('/login')}
              type="secondary"
              size="md"
            >
              Login
            </Button>
            <Button
              onClick={() => router.push('/register')}
              style={{ marginLeft: '10px' }}
              type="primary"
              size="md"
            >
              Sign up
            </Button>
          </>
        ) : (
          <>
            <Button
              type="primary"
              size="md"
              onClick={() => router.push('/account')}
            >
              Account
            </Button>
            <Button
              type="secondary"
              size="md"
              style={{ marginLeft: '10px' }}
              onClick={() =>
                signOut({ callbackUrl: `${process.env.NEXTAUTH_URL}/login` })
              }
            >
              Sign Out
            </Button>
          </>
        )}
      </AuthContainer>
      <Search />
    </Container>
  )
}

export default Header
