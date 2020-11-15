import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-width: 100%;
  margin-top: 20px;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1 0 auto;
  margin-top: 64px;
  margin-left: 16px;
  margin-right: 16px;
  position: relative;
`

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 48px;
  max-width: 50%;
`

export const Heading = styled.h3`
  font-size: 40px;
  font-weight: 700;
  color: ${theme.colors.white[1]};
  text-align: center;
  margin-bottom: 0;
`

export const Subheading = styled.h4`
  font-size: 22px;
  font-weight: 400;
  color: ${theme.colors.white[1]};
  text-align: center;
`

export const FullscreenContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 72px 24px;
  min-height: 100%;
`

export const FullscreenContent = styled.div`
  display: grid;
  text-align: center;
  grid-auto-rows: min-content;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: ${theme.space[3]};
`
