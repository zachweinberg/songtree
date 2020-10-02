import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import theme from '.'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    background: var(--bg-primary);
    font-family: ${theme.fonts.body};
    line-height: ${theme.lineHeights.body};
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;

    @media (max-width: ${theme.breakpoints[3]}) {
      font-size: 16px;
    }
  }

  body {
    color: var(--text-primary);
  }

  
`

export default GlobalStyles
