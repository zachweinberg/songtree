import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { getUserByEmail } from '~/lib/users'

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
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        const foundUser = await getUserByEmail(credentials.email)

        if (!foundUser) {
          return Promise.resolve(null)
        } else {
          return Promise.resolve(1)
        }
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      console.log('SESSION')
      console.log(session)
      console.log(user)
      // const sessionUser: SessionUser = {
      //   ...session.user,
      //   id: user.id,
      //   username: user.username,
      //   role: user.role,
      // }

      return Promise.resolve({
        ...session,
      })
    },
    async jwt(token, user, _account, profile) {
      console.log('JWT')
      console.log(user)
      console.log(_account)
      console.log(profile)

      return Promise.resolve({ ...token })
    },
  },
  session: { maxAge: 30 * 24 * 60 * 60 }, // 30 days
  jwt: { secret: process.env.JWT_SECRET },
}

export default (req, res) => NextAuth(req, res, options)
