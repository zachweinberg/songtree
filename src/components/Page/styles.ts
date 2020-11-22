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
  position: relative;
  width: auto;
  padding: 16px;
`

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 48px;
`

export const Heading = styled.h3`
  font-size: 38px;
  font-weight: 700;
  color: ${theme.colors.white[1]};
  margin-bottom: 5px;
  ${theme.breakpoints.md} {
    text-align: center;
  }
`

export const Subheading = styled.h4`
  font-size: 22px;
  font-weight: 400;
  color: ${theme.colors.gray[2]};
  margin: 0;
  ${theme.breakpoints.md} {
    text-align: center;
  }
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
