export interface Song {
  id: string
  name: string
  releaseYear: string
  artist: string
  album: string
  albumArtUrl: string
  likes: number
  dislikes: number
  comments?: Comment[]
  previewUrl?: string | null
  createdAt?: Date | string
}

export interface Comment {
  text: string
  author: string
  authorID: string
  likes: number
  songID: string
  createdAt: Date | string
}

export interface User {
  username: string
  id: string
  email?: string
  password?: string
  authType: 'github' | 'spotify' | 'email'
  createdAt: Date
}
