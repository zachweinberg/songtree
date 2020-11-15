import GlobalStyles from '~/components/Theme/GlobalStyles'
import { AppProvider } from './Context'
import SEO from './SEO'

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
