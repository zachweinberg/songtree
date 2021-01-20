import { Song } from '~/types'
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

  recentSongs.forEach((song: Song) => {
    song.createdAt = (song.createdAt as Date).toISOString()
  })

  return recentSongs
}

export const getOrCreateSong = async (songID: string): Promise<Song> => {
  let song: Song

  const songDoc = await getDocument<Song>('songs', songID)

  if (!songDoc) {
    song = await createSong(songID)
  } else {
    song = songDoc
  }

  song.createdAt = (song.createdAt as Date).toISOString()

  return song
}
