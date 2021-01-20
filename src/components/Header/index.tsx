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
        <Button type="secondary" size="md">
          About
        </Button>
      </AuthContainer>
      <Search />
    </Container>
  )
}

export default Header
