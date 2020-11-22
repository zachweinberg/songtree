import styled from 'styled-components'
import theme from '~/components/Theme'

export const Grid = styled.div`
  margin-top: 90px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  /* justify-content: center; */
  width: 100%;

  ${theme.breakpoints.md} {
    grid-template-columns: 330px auto;
    grid-template-rows: auto;
    grid-gap: 65px;
    max-width: 1000px;
  }
`

export const Sidebar = styled.div`
  ${theme.breakpoints.md} {
    grid-column: 1 / 2;
  }
`

export const SongInfo = styled.div`
  ${theme.breakpoints.md} {
    grid-column: 2 / 3;
  }
`

export const AlbumArt = styled.img`
  border-radius: ${theme.borderRadius};
  width: 100%;
  max-width: 500px;
  ${theme.breakpoints.md} {
    grid-column: 1 / 2;
  }
`

export const SongTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${theme.colors.white[1]};
  margin-top: 5px;
  margin-bottom: 10px;
`

export const Description = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  color: ${theme.colors.gray[3]};
  line-height: 1.4;
  margin-bottom: 8px;
`
