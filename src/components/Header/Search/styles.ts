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
    margin: 0 auto;
    width: 100%;
    max-width: 570px;
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
  height: auto;
  max-height: 360px;
  overflow-y: scroll;
  max-width: 100%;
`

export const ResultItem = styled.a`
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid ${theme.colors.border[1]};
  cursor: pointer;
  &:hover {
    background-color: #282828;
  }
`

export const AlbumArtwork = styled.img`
  border-radius: ${theme.borderRadius};
  height: 100%;
  max-width: 100px;
`

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 12px;
`

export const SongTitle = styled.p`
  font-size: 21px;
  font-weight: 500;
  color: ${theme.colors.white[1]};
  line-height: 1.2;
  margin: 0;
`

export const SongArtist = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: ${theme.colors.gray[3]};
  margin: 0;
`
