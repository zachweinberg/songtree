import styled, { css } from 'styled-components'
import theme from '~/components/Theme'

const base = css`
  font-family: inherit;
  box-sizing: border-box !important;
  border-radius: ${theme.borderRadius} !important;
  background: ${theme.colors.black[1]};
  color: ${theme.colors.gray[2]};
  border: 1px solid ${theme.colors.border[1]};
  padding: 12px 16px;
  width: 100%;
  box-shadow: none;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover {
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }
  &:focus {
    background: ${theme.colors.gray[1]};
    border-radius: ${theme.borderRadius} !important;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }
  &:active {
    border-radius: ${theme.borderRadius} !important;
  }
`
export const Input = styled.input`
  ${base}
  text-align: ${(props) => (props.centerText ? 'center' : 'auto')};
`

export const StyledTextArea = styled.textarea`
  ${base}
  resize: vertical;
`
