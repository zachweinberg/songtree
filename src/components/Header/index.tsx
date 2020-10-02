import { Container, LogoContainer, RandomContainer } from './style'
import Button from '~/components/Buttons'

const Header = () => {
  return (
    <Container>
      <LogoContainer>Hey</LogoContainer>
      <div></div>
      <RandomContainer>
        <Button>Random Song</Button>
      </RandomContainer>
    </Container>
  )
}

export default Header
