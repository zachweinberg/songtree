import axios from 'axios'

export const register = async (email, password) => {
  return axios.post('/api/auth/register', { email, password })
}
