import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { createOAuthUser, getUserByEmail, getUserByID } from '~/lib/users'
import { getRandomUsername } from '~/lib/utils'

const options: InitOptions = {
  pages: { signIn: '/login' },
  secret: process.env.AUTH_SECRET,
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
    Providers.Credentials({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const foundUser = await getUserByEmail(
          credentials.email,
          credentials.password
        )
        if (!foundUser) {
          return Promise.reject('login?state=InvalidLogin')
        } else {
          return Promise.resolve({
            id: foundUser.id,
            authType: foundUser.authType,
            username: foundUser.username,
            createdAt: foundUser.createdAt,
          })
        }
      },
    }),
  ],
  callbacks: {
    /**
     * @param  {object}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @param  {object}  account   Provider account (only available on sign in)
     * @param  {object}  profile   Provider profile (only available on sign in)
     * @param  {boolean} isNewUser True if new user (only available on sign in)
     * @return {object}            JSON Web Token that will be saved
     */
    jwt: async (token, user: any, _account, profile) => {
      const isSignIn = !!user

      if (isSignIn) {
        const providerType: 'oauth' | 'credentials' = _account.type

        if (providerType === 'oauth') {
          const provider = _account.provider
          const userID = profile.id.toString()
          const username =
            provider === 'github' ? profile.login : getRandomUsername()
          await createOAuthUser(userID, provider, username)

          token = {
            ...token,
            id: userID,
            username,
          }
        }
      }

      if (user?.id) {
        const dbUser = await getUserByID(user.id)
        token = {
          ...token,
          id: dbUser.id,
          username: dbUser.username,
        }
      }

      return Promise.resolve(token)
    },
    /**
     * @param  {object} session      Session object
     * @param  {object} user         User object or JWT
     * @return {object}              Session that will be returned to the client
     */
    session: async (session, user: any) => {
      const dbUser = await getUserByID(user.id)

      const sessionUser = {
        ...session.user,
        id: dbUser.id,
        username: dbUser.username,
      }

      return Promise.resolve({
        ...session,
        user: sessionUser,
      })
    },
  },
  session: { maxAge: 30 * 24 * 60 * 60 }, // 30 days
  jwt: { secret: process.env.JWT_SECRET },
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
