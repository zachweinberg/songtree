import styled from 'styled-components'
import theme from '~/components/Theme'
const { breakpoints } = theme

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'logo search random';
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  z-index: 3;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in-out;
`

export const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  margin-top: 4px;
`
export const Logo = styled.a`
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
    transition: 0.2s opacity ease-in-out;
  }
`
