import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'logo auth'
    'search search';
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.gray[1]};
  z-index: 3;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in-out;

  ${theme.breakpoints.md} {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'logo search auth';
  }
`

export const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
`

export const AuthContainer = styled.div`
  grid-area: auth;
  display: flex;
  justify-content: flex-end;
`

export const Logo = styled.a`
  font-weight: 700;
  font-size: 23px;
  cursor: pointer;
  ${theme.breakpoints.md} {
    font-size: 26px;
  }
  &:hover {
    opacity: 0.65;
    transition: 0.2s opacity ease-in-out;
  }
`
