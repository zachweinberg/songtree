import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  flex: 0 0 ${(props) => props.size};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  min-width: ${(props) => props.size};
  min-height: ${(props) => props.size};
  position: relative;
  color: inherit;
`

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`
