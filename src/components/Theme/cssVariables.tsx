import { COLORS } from './colors'

// Convert our theme colors to css variables
export const setColorsByTheme = () => {
  const colors = '🌈'

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = mql.matches
  const colorMode = prefersDarkFromMQ ? 'dark' : 'light'

  const root = document.documentElement

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`
    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

// Inject JS script at compile
export const MagicScriptTag = () => {
  const fn = String(setColorsByTheme).replace("'🌈'", JSON.stringify(COLORS))
  const calledFunction = `(${fn})()`
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

// If JavaScript is disabled, use dark
export const FallbackStyles = () => {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.dark};`
    },
    ''
  )
  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}
