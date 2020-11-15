import Link from 'next/link'
import Button from '~/components/Buttons'
import DarkModeToggle from '~/components/DarkModeToggle'
import Search from './Search'
import { AuthContainer, Container, Logo, LogoContainer } from './styles'

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <Logo>SONGTREE</Logo>
        </Link>
      </LogoContainer>
      <AuthContainer>
        <Button type="secondary" size="md">
          Login
        </Button>
        <Button type="primary" size="md" style={{ marginLeft: '8px' }}>
          Sign up
        </Button>
      </AuthContainer>
      <Search />
      <DarkModeToggle />
    </Container>
  )
}

export default Header
