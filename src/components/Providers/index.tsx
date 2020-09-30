import SEO from './SEO'

interface Props {
  children?: any
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <SEO />
      {children}
    </>
  )
}

export default Providers
