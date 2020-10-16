import { useContext } from 'react'
import { AppContext } from '~/components/Providers/Context'

const DarkModetoggle = () => {
  const { colorMode, setColorMode } = useContext(AppContext)

  if (!colorMode) {
    return null
  }

  return (
    <label>
      <h1>hi</h1>
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={(e) => setColorMode(e.target.checked ? 'dark' : 'light')}
      />
      DarkMode
    </label>
  )
}

export default DarkModetoggle
