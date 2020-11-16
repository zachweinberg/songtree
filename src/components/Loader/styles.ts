import styled, { keyframes } from 'styled-components'
import theme from '~/components/Theme'

const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

export const Loader = styled.i`
  position: relative;
  height: 20px;
  width: 20px;
  display: inline-block;
  animation: ${spin} 5s infinite;

  &:after {
    animation: ${spin} 0.7s ease-in-out 0.1s infinite;
    background: transparent;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-color: ${theme.colors.purple[1]} #481ad5 transparent transparent;
    border-style: solid;
    border-radius: 20px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    animation: ${spin} 0.7s ease-in-out infinite;
  }
`
