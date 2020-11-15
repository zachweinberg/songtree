import styled from 'styled-components'
import theme from '~/components/Theme'

export const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 330px minmax(min-content, max-content);
  grid-template-rows: auto;
  grid-gap: 35px;
`

export const Sidebar = styled.div`
  grid-column: 1 / 2;
`

export const SongInfo = styled.div`
  grid-column: 2 / 3;
`

export const AlbumArt = styled.img`
  border-radius: ${theme.borderRadius};
  width: 100%;
`

export const SongTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color:  color: ${theme.colors.white[1]};
  margin-bottom: 10px;
`

export const Description = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  color:  color: ${theme.colors.text[1]};
  line-height: 1.4;
  margin-bottom: 8px;
`
