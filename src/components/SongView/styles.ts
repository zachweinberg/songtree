import styled from 'styled-components'
import theme from '~/components/Theme'

export const SongInfo = styled.div`
  margin-top: 64px;
  width: 900px;
  display: flex;
`

export const AlbumArt = styled.img`
  max-width: 370px;
  border-radius: ${theme.borderRadius};
  margin-right: 64px;
`

export const Description = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: var(--text-tertiary);
  line-height: 1.4;
`
