import { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { setColorsByTheme } from '../Theme/CssVariables'

const DarkMode = () => {
  const darkMode = useDarkMode(false, { storageKey: null, onChange: null })

  useEffect(() => {
    setColorsByTheme()
  }, [darkMode, darkMode.value])

  return null
}

export default DarkMode
