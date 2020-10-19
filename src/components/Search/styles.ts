import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 968px) {
    padding-top: 8px;
  }
`

export const Input = styled.input`
  border-radius: 4px !important;
  background: var(--bg-primary);
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
  padding: 12px 16px;
  width: 100%;
  box-shadow: none;
  font-size: 16px;
  &:hover {
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }
  &:focus {
    background: var(--bg-secondary);
    border-radius: 4px !important;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }
  &:active {
    border-radius: 4px !important;
  }
`

export const ResultsContainer = styled.div`
  position: absolute;
  top: 48px;
  width: 100%;
  background: var(--bg-secondary);
  transition: all 0.2s ease-in-out 0s;
  border-radius: 4px;
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
  border-bottom: 1px solid var(--border-primary);
  display: flex;
  flex: 1 0 auto;
  align-items: center;

  &:hover {
    background: var(--bg-primary);
  }
`

export const AlbumArtwork = styled.img`
  border-radius: 4px;
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
  color: var(--text-primary);
  line-height: 1.2;
  margin-top: 2px;
`

export const SongArtist = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-primary);
`
