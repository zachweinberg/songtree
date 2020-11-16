import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div``

export const ReactionButton = styled.button`
  background-color: ${theme.colors.gray[1]};
  border: 1px solid ${theme.colors.border[1]};
  color: ${theme.colors.gray[2]};
  border-radius: ${theme.borderRadius};
  margin-top: 10px;
  font-size: 20px;
  padding: 15px 0;
`
