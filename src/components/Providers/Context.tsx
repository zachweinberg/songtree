import { createContext, useMemo, useState } from 'react'
import Theme from '~/components/Theme'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined)

  const contextValue = useMemo(() => {
    const setColorMode = (newValue) => {
      const root = window.document.documentElement

      localStorage.setItem('colorMode', newValue)

      Object.entries(Theme.colors).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`
        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })

      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
