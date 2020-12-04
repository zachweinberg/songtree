import axios from 'axios'

export const registerReq = async (email, password) => {
  return axios.post('/api/auth/register', { email, password })
}

export const updateUsernameReq = async (username) => {
  return axios.post('/api/users/set-username', { username })
}
