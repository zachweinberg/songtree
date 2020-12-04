import React from 'react'
import { Song } from '~/types'
import { Container, ReactionButton } from './styles'

interface Props {
  song: Song
}

const SongReactions = ({ song }: Props) => {
  return (
    <Container>
      <ReactionButton onClick={() => alert('These dont do anything yet!')}>
        Like
      </ReactionButton>
      <ReactionButton onClick={() => alert('These dont do anything yet!')}>
        Dislike
      </ReactionButton>
    </Container>
  )
}

export default SongReactions
