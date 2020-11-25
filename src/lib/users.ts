import { User } from '../types'
import { createDocument, findDocuments } from './db'

export const createUser = async (
  email: string,
  password: string
): Promise<void> => {
  const userData = { email, password, createdAt: new Date() }
  await createDocument('users', userData)
}

export const getUserByEmail = async (email): Promise<User> => {
  const users = await findDocuments<User>(
    'users', // We use this collection so we have control over what is shown on the homepage
    [{ property: 'email', condition: '==', value: email }]
  )
  if (users.length > 0) {
    return users[0]
  }
  return null
}
