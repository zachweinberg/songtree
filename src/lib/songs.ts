import { getDocument, createDocument } from './db'
import { getSpotifySongData } from './spotify'
import { Song } from '~/types'

const createSong = async (songID: string): Promise<Song> => {
  let songData = await getSpotifySongData(songID)
  songData = { ...songData, createdAt: new Date() }
  await createDocument('songs', songData, songID)
  return songData
}

export const getOrCreateSong = async (songID: string): Promise<Song> => {
  let song: Song

  const songDoc = await getDocument<Song>('songs', songID)

  if (!songDoc) {
    song = await createSong(songID)
  } else {
    song = songDoc
  }

  return song
}
