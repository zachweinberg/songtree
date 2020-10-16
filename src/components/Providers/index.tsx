import GlobalStyles from '~/components/Theme/GlobalStyles'
import SEO from './SEO'
import DarkMode from './DarkMode'

interface Props {
  children?: any
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <SEO />
      <DarkMode />
      <GlobalStyles />
      {children}
    </>
  )
}

export default Providers
