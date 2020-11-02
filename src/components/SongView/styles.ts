import styled from 'styled-components'
import theme from '~/components/Theme'

export const SongInfo = styled.div`
  margin-top: 64px;
  width: 900px;
  display: flex;
`

export const AlbumArt = styled.img`
  max-width: 300px;
  border-radius: ${theme.borderRadius};
  margin-right: 35px;
`

export const SongTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
`

export const Description = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  color: var(--text-tertiary);
  line-height: 1.4;
  margin-bottom: 8px;
`
