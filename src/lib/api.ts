import axios from 'axios'

export const registerReq = (email, password) => {
  return axios.post('/api/auth/register', { email, password })
}

export const updateUsernameReq = (username) => {
  return axios.post('/api/users/set-username', { username })
}

export const submitComment = (comment, songID) => {
  return axios.post(`/api/songs/comment`, { comment, songID })
}
