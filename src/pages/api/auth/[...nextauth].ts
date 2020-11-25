import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'

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
        console.log(JSON.stringify(credentials))
        const user = (credentials) => {
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          return null
        }
        if (user) {
          // Any user object returned here will be saved in the JSON Web Token
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
  session: { maxAge: 30 * 24 * 60 * 60 }, // 30 days
  jwt: { secret: process.env.JWT_SECRET },
}

export default (req, res) => NextAuth(req, res, options)
