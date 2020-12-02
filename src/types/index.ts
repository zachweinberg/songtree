export interface Song {
  id: string
  name: string
  releaseYear: string
  artist: string
  album: string
  albumArtUrl: string
  comments?: Comment[]
  previewUrl?: string | null
  createdAt?: Date | string
}

interface Comment {
  text: string
  createdAt: Date
}

export interface User {
  username: string
  id: string
  email?: string
  password?: string
  authType: 'github' | 'spotify' | 'email'
  createdAt: Date
}
