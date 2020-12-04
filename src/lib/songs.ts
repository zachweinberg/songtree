import { formatDistance } from 'date-fns'
import { Comment, Song } from '~/types'
import { createDocument, findDocuments, getDocument } from './db'
import { getSpotifySongData } from './spotify'

const createSong = async (songID: string): Promise<Song> => {
  let songData = await getSpotifySongData(songID)
  songData = { ...songData, likes: 0, dislikes: 0, createdAt: new Date() }
  await createDocument('songs', songData, songID)
  return songData
}

export const getRecentSongs = async (): Promise<Song[]> => {
  const recentSongs = await findDocuments<Song>(
    'recentSongs', // We use this collection so we have control over what is shown on the homepage
    [],
    { fieldName: 'createdAt', sortDirection: 'desc' },
    8
  )
  return recentSongs
}

export const getOrCreateSong = async (songID: string): Promise<Song> => {
  let song: Song

  const songDoc = await getDocument<Song>('songs', songID)

  if (!songDoc) {
    song = await createSong(songID)
  } else {
    song = songDoc

    const songComments = await findDocuments<Comment>(
      'comments',
      [{ property: 'songID', condition: '==', value: songID }],
      { fieldName: 'createdAt', sortDirection: 'desc' },
      20
    )

    if (songComments.length > 0) {
      songComments.forEach((comment: Comment) => {
        // Friendly "days ago" timestamps
        comment.createdAt = formatDistance(
          comment.createdAt as Date,
          new Date()
        )
      })
    }

    song.comments = songComments
  }

  return song
}

export const addComment = async (commentData) => {
  await createDocument('comments', commentData)
}
