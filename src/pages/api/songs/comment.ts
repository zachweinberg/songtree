import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { addComment } from '~/lib/songs'
import { Comment } from '~/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Not found' })
  }

  try {
    const { comment, songID } = req.body

    if (!comment || comment.length === 0) {
      return res.status(401).json({ error: 'Invalid comment.' })
    }

    const session = await getSession({ req })

    if (!session) {
      throw new Error()
    }

    const user = session.user

    const commentData: Comment = {
      text: comment,
      createdAt: new Date(),
      author: user.username,
      authorID: user.id,
      likes: 0,
      songID,
    }

    await addComment(commentData)

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
