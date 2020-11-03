import React from 'react'
import { Song } from '~/types'
import { Grid } from './styles'

interface Props {
  song: Song
}

const SongReactions = ({ song }: Props) => {
  return (
    <Grid>
      <p>Like</p>
    </Grid>
  )
}

export default SongReactions
