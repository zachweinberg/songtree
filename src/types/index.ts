export interface Song {
  id: string
  name: string
  releaseDate: string
  artist: string
  album: string
  albumArtUrl: string
  comments?: Comment[]
  createdAt?: Date | string
}

interface Comment {
  text: string
  createdAt: Date
}
