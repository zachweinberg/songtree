import styled from 'styled-components'
import theme from '~/components/Theme'
import { ButtonSize, ButtonType } from './index'

const calcPadding = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return '4px 8px'
    case 'md':
      return '10px 16px'
    case 'lg':
      return '20px 32px'
    default: {
      return '10px 16px'
    }
  }
}

const calcFontSize = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return '14px'
    case 'md':
      return '16px'
    case 'lg':
      return '18px'
    default: {
      return '16px'
    }
  }
}

const calcBGColor = (type: ButtonType) => {
  switch (type) {
    case 'primary':
      return theme.colors.purple[1]
    case 'secondary':
      return theme.colors.white[1]
    default:
      return theme.colors.white[1]
  }
}

const calcColor = (type: ButtonType) => {
  switch (type) {
    case 'primary':
      return theme.colors.white[1]
    case 'secondary':
      return theme.colors.black[1]
    default:
      return theme.colors.black[1]
  }
}

export const ButtonContainer = styled.button`
  background-color: ${(props) => calcBGColor(props.type)};
  color: ${(props) => calcColor(props.type)};
  text-align: center;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  word-break: keep-all;
  border-radius: ${theme.borderRadius};
  border: none;
  cursor: pointer;
  font-size: ${(props) => calcFontSize(props.size)};
  padding: ${(props) => calcPadding(props.size)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  box-shadow: ${(props) =>
    props.disabled ? 'none' : `0 1px 2px rgba(0,0,0,0.04)`};

  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.9;
    transition: all 0.17s ease-in-out;
    box-shadow: ${(props) =>
      props.disabled ? 'none' : `${theme.shadows.button}`};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors.gray[2]};
  }
`
