import styled from 'styled-components'
import theme from '~/components/Theme'

export const Title = styled.h4`
  font-size: 25px;
  font-weight: 500;
  margin: 0;
`

export const SettingContainer = styled.div`
  border: 1px solid ${theme.colors.gray[4]};
  border-radius: ${theme.borderRadius};
  padding: 15px;
`

export const Description = styled.p`
  font-size: 18px;
`
