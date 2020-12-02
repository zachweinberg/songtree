import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div`
  margin-top: 20px;
  max-width: 420px;
  width: 100%;
  background-color: ${theme.colors.gray[1]};
  padding: 40px 25px;
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.colors.gray[4]};
`
export const ButtonContainer = styled.div`
  margin-bottom: 12px;
`

export const EmailForm = styled.form`
  margin-top: 20px;
`

export const ProvidersBox = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.colors.gray[4]};
`

export const Notification = styled.p`
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.gray[5]};
  color: ${theme.colors.white[1]};
  font-size: 15px;
  padding: 11px;
`
