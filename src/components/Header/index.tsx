import Link from 'next/link'
import DarkModeToggle from '~/components/DarkModeToggle'
import Search from './Search'
import { Container, Logo, LogoContainer } from './styles'

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
