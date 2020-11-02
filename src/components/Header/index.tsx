import { Container, LogoContainer } from './styles'
import Search from '~/components/Search'
import DarkModeToggle from '~/components/DarkModeToggle'

const Header = () => {
  return (
    <Container>
      <LogoContainer>SongTree</LogoContainer>
      <Search />
      <DarkModeToggle />
    </Container>
  )
}

export default Header
