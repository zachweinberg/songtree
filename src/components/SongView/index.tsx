import { useSession } from 'next-auth/client'
import Router from 'next/router'
import React from 'react'
import Button from '~/components/Buttons'
import PlayButton from '~/components/PlayButton'
import { Song } from '~/types'
import CommentBox from './CommentBox'
import SongReactions from './SongReactions'
import {
  AlbumArt,
  Description,
  Grid,
  Sidebar,
  SongInfo,
  SongTitle,
} from './styles'
interface Props {
  song: Song
}

const SongView = ({ song }: Props) => {
  const [session] = useSession()

  return (
    <Grid>
      <Sidebar>
        <AlbumArt src={song.albumArtUrl} />
        <SongReactions song={song} />
      </Sidebar>
      <SongInfo>
        <SongTitle>{song.name}</SongTitle>
        <Description>By {song.artist}</Description>
        <Description>
          {song.album} ({song.releaseYear})
        </Description>
        {song.previewUrl && <PlayButton src={song.previewUrl} />}
        {session ? (
          <CommentBox username={session.user.username} />
        ) : (
          <Button
            type="secondary"
            size="md"
            style={{ marginTop: '50px' }}
            onClick={() => Router.push('/register')}
          >
            Sign up to leave comments!
          </Button>
        )}
      </SongInfo>
    </Grid>
  )
}

export default SongView
