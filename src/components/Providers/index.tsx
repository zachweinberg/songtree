import GlobalStyles from '~/components/Theme/GlobalStyles'
import SEO from './SEO'

interface Props {
  children?: any
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      {children}
    </>
  )
}

export default Providers
