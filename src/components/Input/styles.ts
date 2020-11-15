import styled from 'styled-components'
import theme from '~/components/Theme'

export const Input = styled.input`
  border-radius: ${theme.borderRadius};
  background: var(--bg-primary);
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
  padding: 12px 16px;
  width: 100%;
  box-shadow: none;
  font-size: 16px;
  &:hover {
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }
  &:focus {
    background: var(--bg-secondary);
    border-radius: ${theme.borderRadius} !important;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }
  &:active {
    border-radius: ${theme.borderRadius} !important;
  }
`
