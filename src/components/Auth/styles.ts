import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div`
  margin-top: 20px;
  max-width: 350px;
  width: 100%;
  background-color: ${theme.colors.gray[1]};
  padding: 40px 25px;
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.colors.gray[4]};
`
export const ButtonContainer = styled.div`
  margin-bottom: 12px;
`
