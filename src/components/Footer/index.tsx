import Icon from '~/components/Icon'
import { Container } from './styles'

const Footer = () => {
  return (
    <Container>
      <a
        href="https://github.com/zachweinberg/songtree"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <Icon name="github" size="25px" style={{ fill: '#ccc' }} />
        <p style={{ margin: '4px 0', color: '#a9abb6', fontSize: '15px' }}>
          This project is open source
        </p>
      </a>
    </Container>
  )
}

export default Footer
