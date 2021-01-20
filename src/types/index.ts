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
