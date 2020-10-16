import { Container, LogoContainer } from './style'
import Search from '~/components/Search'

const Header = () => {
  return (
    <Container>
      <LogoContainer>Song Thoughts</LogoContainer>
      <Search />
    </Container>
  )
}

export default Header
