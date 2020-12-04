import styled from 'styled-components'
import theme from '~/components/Theme'

const calcBGColor = (type) => {
  switch (type) {
    case 'notification':
      return theme.colors.gray[1]
    case 'success':
      return theme.colors.green[1]
    case 'alert':
      return theme.colors.red[1]
    default:
      return theme.colors.white[1]
  }
}

const calcBorderColor = (type) => {
  switch (type) {
    case 'notification':
      return theme.colors.gray[4]
    case 'success':
      return theme.colors.gray[5]
    case 'alert':
      return theme.colors.red[2]
    default:
      return theme.colors.white[1]
  }
}

export const Wrapper = styled.div`
  background-color: ${(props) => calcBGColor(props.type)};
  padding: 10px 20px;
  border-radius: ${theme.borderRadius};
  border: 1px solid ${(props) => calcBorderColor(props.type)};
  font-weight: 600;
`
