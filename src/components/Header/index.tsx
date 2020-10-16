import { Container, LogoContainer } from './style'
import Button from '~/components/Buttons'
import Search from '~/components/Search'

const Header = () => {
  return (
    <Container>
      <LogoContainer>Hey</LogoContainer>
      <Search />
    </Container>
  )
}

export default Header
