import styled from 'styled-components'
import theme from '~/components/Theme'

export const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 330px minmax(min-content, max-content);
  grid-template-rows: auto;
  grid-gap: 35px;
`
