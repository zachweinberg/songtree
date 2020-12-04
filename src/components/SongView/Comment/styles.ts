import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div`
  border-bottom: 1px solid ${theme.colors.gray[1]};
  margin-top: 25px;
  padding-bottom: 10px;
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const CommentAuthor = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
`

export const CommentBody = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: ${theme.colors.gray[2]};
`

export const CommentDate = styled.p`
  font-weight: 400;
  margin: 0;
  color: ${theme.colors.gray[3]};
  padding-left: 15px;
`
