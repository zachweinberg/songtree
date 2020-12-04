import styled from 'styled-components'
import theme from '~/components/Theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${theme.breakpoints.md} {
    flex-direction: row;
  }
`
export const SettingTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.gray[2]};
  margin: 0;
`

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.gray[4]};
  border-radius: ${theme.borderRadius};
  padding: 15px;
  margin-top: 30px;
`

export const Description = styled.p`
  font-size: 19px;
  color: ${theme.colors.gray[3]};
  margin-top: 10px;
`
