import bcrypt from 'bcryptjs'
import { User } from '~/types'
import { createDocument, findDocuments, getDocument } from './db'

export const createEmailUser = async (
  email: string,
  password: string
): Promise<void> => {
  const users = await findDocuments<User>('users', [
    { property: 'email', condition: '==', value: email },
    { property: 'authType', condition: '==', value: 'email' },
  ])

  if (users.length > 0) {
    throw new Error('A user with that email already exists.')
  }

  const userData: Partial<User> = {
    email,
    username: `user`,
    authType: 'email',
    createdAt: new Date(),
  }

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  userData.password = hash
  await createDocument('users', userData)
}

export const createOAuthUser = async (
  oauthID,
  authType: 'github' | 'spotify' | null
): Promise<void> => {
  if (!authType) {
    throw new Error('Invalid provider.')
  }
  const user = await getDocument<User>('users', String(oauthID))

  if (!user) {
    await createDocument(
      'users',
      {
        email: null,
        username: null,
        authType,
        createdAt: new Date(),
      },
      String(oauthID)
    )
  }
}

export const getUserByEmail = async (email, password): Promise<User> => {
  const users = await findDocuments<User>('users', [
    { property: 'email', condition: '==', value: email },
    { property: 'authType', condition: '==', value: 'email' },
  ])

  if (users.length > 0) {
    const hashedPwd = users[0].password
    const passes = bcrypt.compareSync(password, hashedPwd)

    if (passes) {
      return users[0]
    }
  }

  return null
}

export const getUserByID = async (userID) => {
  const user = await getDocument<User>('users', userID)
  return user
}
