import styled from 'styled-components'
import theme from '~/components/Theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 18px;
  max-width: 100%;
  ${theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    max-width: 1000px;
  }
`

export const SongInfo = styled.div`
  max-width: 100%;
`

export const AlbumArt = styled.img`
  border-radius: ${theme.borderRadius};
  max-width: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    transition: 0.32s transform ease-in-out;
  }
`

export const SongTitle = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: ${theme.colors.white[1]};
  margin-top: 0;
  margin-bottom: 3px;
`

export const SongArtist = styled.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 400;
  color: ${theme.colors.text[1]};
  line-height: 1.4;
`
