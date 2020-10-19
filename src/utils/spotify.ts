import axios from 'axios'
import qs from 'querystring'
import { Song } from '~/types'

interface SpotifyToken {
  access_token: string
  token_type: string
  expires_in: number
  issued_at: number
}

interface SpotifyTrack {
  id: string
  url: string
  popularity: number
  name: string
  duration_ms: number
}
interface SpotifySearchResults {
  href: string
  items: SpotifyTrack[]
  limit: number
  next: string | null
  offset: number
  total: number
  previous: string | null
}

let __token: SpotifyToken | null = null

const fetchSpotifyToken = async (): Promise<SpotifyToken> => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    throw new Error('Missing Spotify client credentials')
  }

  const base64EncodedString = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const { data } = await axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      Authorization: `Basic ${base64EncodedString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      grant_type: 'client_credentials',
    }),
  })

  return {
    ...data,
    issued_at: Date.now(),
    expires_in: data.expires_in * 1000,
  } as SpotifyToken
}

const tokenIsValid = (token: SpotifyToken): boolean => {
  return Date.now() < token.issued_at + token.expires_in
}

const getSpotifyToken = async (): Promise<SpotifyToken> => {
  if (!__token || !tokenIsValid(__token)) {
    const newToken = await fetchSpotifyToken()
    __token = newToken
    return newToken
  }
  return __token
}

const formatSpotifyResults = (results: SpotifySearchResults): Song[] => {
  if (!results || !results.items) {
    return []
  }

  return results.items.map((item) => ({
    name: item.name,
    artist: 'Steely',
    image: '',
  }))
}

// TODO: Type this response
export const searchSpotify = async (query: string) => {
  const token = await getSpotifyToken()
  const searchTerm = query.replace(' ', '%20')
  const { data } = await axios({
    url: `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  })
  return formatSpotifyResults(data.tracks)
}
