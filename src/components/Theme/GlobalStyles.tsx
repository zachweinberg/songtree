import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import theme from './index'

const GlobalStyles = createGlobalStyle`
  /* ${normalize} */

  html {
    background: ${theme.colors.black[1]};
    font-family: ${theme.fonts.body};
    line-height: ${theme.lineHeights.body};
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }

  body {
    color: ${theme.colors.white[1]};
  }

  #nprogress {
  pointer-events: none;
}

  #nprogress .bar {
    background: ${theme.colors.purple[1]};
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
    z-index: 2000;
  }

  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`

export default GlobalStyles
