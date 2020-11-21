import React from 'react'
import { Song } from '~/types'
import { Container, ReactionButton } from './styles'

interface Props {
  song: Song
}

const SongReactions = ({ song }: Props) => {
  return (
    <Container>
      <ReactionButton>Like</ReactionButton>
      <ReactionButton>Dislike</ReactionButton>
    </Container>
  )
}

export default SongReactions
