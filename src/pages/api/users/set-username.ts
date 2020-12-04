import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { updateUsername } from '~/lib/users'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Not found' })
  }

  try {
    const { username } = req.body

    if (!username) {
      return res.status(401).json({ error: 'Invalid username.' })
    }

    if (username.length > 22) {
      return res.status(401).json({ error: 'Please use a shorter username.' })
    }

    const session = await getSession({ req })

    if (!session) {
      throw new Error()
    }

    const userID = session.user.id

    await updateUsername(username.toLowerCase(), userID)

    res.status(200).json({ message: 'Success' })
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}

export default handler
