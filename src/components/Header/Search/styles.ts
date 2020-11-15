import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-area: search;
  margin-top: 7px;
  ${theme.breakpoints.md} {
    margin-top: 0;
  }
`

export const ResultsContainer = styled.div`
  position: absolute;
  top: 48px;
  width: 100%;
  background: ${theme.colors.gray[1]};
  transition: all 0.2s ease-in-out 0s;
  border-radius: ${theme.borderRadius};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: auto;
  max-height: 360px;
  overflow-y: scroll;
  max-width: 100%;
`

export const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${theme.colors.border[1]};
  display: flex;
  flex: 1 0 auto;
  align-items: center;

  &:hover {
    background: ${theme.colors.gray[1]};
  }
`

export const AlbumArtwork = styled.img`
  border-radius: ${theme.borderRadius}
  width: 60px;
  height: 60px;
`

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`

export const SongTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.white[1]};
  line-height: 1.2;
  margin-top: 2px;
`

export const SongArtist = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.white[1]};
`
