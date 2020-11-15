import Link from 'next/link'
import { Container, LogoContainer, Logo } from './styles'
import Search from './Search'
import DarkModeToggle from '~/components/DarkModeToggle'

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <Logo>SONGTREE</Logo>
        </Link>
      </LogoContainer>
      <Search />
      <DarkModeToggle />
    </Container>
  )
}

export default Header
