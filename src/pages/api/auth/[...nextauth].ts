import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { createOAuthUser, getUserByEmail, getUserByID } from '~/lib/users'

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
            username: foundUser.authType,
            createdAt: foundUser.createdAt,
          })
        }
      },
    }),
  ],
  callbacks: {
    // Called whenever a jwt is created (at sign in) or updated (whenever a session is accesed in the client).
    jwt: async (token, user: any, _account, profile) => {
      let response = token

      if (user && profile.id) {
        const oauthType = profile.login
          ? 'github'
          : profile.display_name
          ? 'spotify'
          : null

        await createOAuthUser(profile.id, oauthType)
        user.id = String(profile.id)
      }

      if (user?.id) {
        const dbUser = await getUserByID(user.id)

        response = {
          ...token,
          id: user?.id,
          username: dbUser.username,
        }
      }

      return Promise.resolve(response)
    },
    // Called whenever a session is checked
    session: async (session, user: any) => {
      const sessionUser = {
        ...session.user,
        id: user.id,
        username: user.username,
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

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.url.includes('/error')) {
    return res.redirect('/login')
  }
  return NextAuth(req, res, options)
}
