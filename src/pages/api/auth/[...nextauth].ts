import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'

const options: InitOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Providers.Google({}),
    // Providers.Spotify({}),
  ],
  session: { maxAge: 30 * 24 * 60 * 60 }, // 30 days
  jwt: { secret: process.env.JWT_SECRET },
}

export default (req, res) => NextAuth(req, res, options)
