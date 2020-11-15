import styled from 'styled-components'
import theme from '~/components/Theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 35px;
`

export const SongInfo = styled.a`
  max-width: 270px;
  width: 220px;
`

export const AlbumArt = styled.img`
  border-radius: ${theme.borderRadius};
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    transition: 0.32s transform ease-in-out;
  }
`

export const SongTitle = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3px;
`

export const SongArtist = styled.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 1.4;
`
