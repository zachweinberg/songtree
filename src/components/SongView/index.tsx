import { useSession } from 'next-auth/client'
import Router from 'next/router'
import { useState } from 'react'
import Button from '~/components/Buttons'
import { Song } from '~/types'
import Comment from './Comment'
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
  const [comments, setComments] = useState(song.comments)

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

        {/* {song.previewUrl && <PlayButton src={song.previewUrl} />} */}

        {session ? (
          <CommentBox
            username={session.user.username}
            songID={song.id}
            onSuccess={(comment) => {
              // optimistically add the comment to the UI (not real load)
              const newFake = {
                author: session.user.username,
                text: comment,
                createdAt: 'a second',
                authorID: session.user.id,
                likes: 0,
                songID: song.id,
              }
              const newComments = [newFake, ...comments]
              setComments(newComments)
            }}
          />
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

        {comments.length > 0 &&
          comments.map((comment, i) => <Comment key={i} comment={comment} />)}
      </SongInfo>
    </Grid>
  )
}

export default SongView
