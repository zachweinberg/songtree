import { COLORS } from './colors'

// Convert our theme colors to css variables
export const setColorsByTheme = () => {
  const colors = 'REPLACE_ME_WITH_JSON'

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = mql.matches
  const colorMode = prefersDarkFromMQ ? 'dark' : 'light'
  const root = document.documentElement

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`
    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

// Inject JS script at compile time
export const MagicScriptTag = () => {
  const fn = String(setColorsByTheme).replace(
    "'REPLACE_ME_WITH_JSON'",
    JSON.stringify(COLORS)
  )
  const calledFunction = `(${fn})()`
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

// If JavaScript is disabled, use dark mode
export const FallbackStyles = () => {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.dark};`
    },
    ''
  )
  const wrapped = `html { ${cssVariableString} }`
  return <style>{wrapped}</style>
}
