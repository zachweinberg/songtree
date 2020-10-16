import GlobalStyles from '~/components/Theme/GlobalStyles'
import SEO from './SEO'
import { AppProvider } from './Context'

interface Props {
  children?: any
}

const Providers = ({ children }: Props) => {
  return (
    <AppProvider>
      <SEO />
      <GlobalStyles />
      {children}
    </AppProvider>
  )
}

export default Providers
