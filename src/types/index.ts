export interface Song {
  id: string
  name: string
  releaseYear: string
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
