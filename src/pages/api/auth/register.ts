import validator from 'email-validator'
import { NextApiRequest, NextApiResponse } from 'next'
import { createEmailUser } from '~/lib/users'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Not found' })
  }

  try {
    const { email, password } = req.body

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }
    if (password.length < 7) {
      return res.status(400).json({ error: 'Please use a longer password' })
    }
    if (!validator.validate(email)) {
      return res.status(400).json({ error: 'Please use a valid email address' })
    }

    await createEmailUser(email, password)

    res.status(200).json({ message: 'Success' })
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(400).json({ error: 'Something went wrong' })
    }
  }
}

export default handler
