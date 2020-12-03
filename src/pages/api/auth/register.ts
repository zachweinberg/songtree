import validator from 'email-validator'
import { NextApiRequest, NextApiResponse } from 'next'
import { createEmailUser } from '~/lib/users'
import { getRandomUsername } from '~/lib/utils'

const validationError = (res, error) => {
  return res.status(400).json({ error })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Not found' })
  }

  try {
    const { email, password } = req.body

    if (!email || !password) {
      return validationError(res, 'Invalid credentials.')
    }

    if (password.length < 7) {
      return validationError(res, 'Please use a longer password.')
    }

    if (!validator.validate(email)) {
      return validationError(res, 'Please use a valid email address.')
    }

    const username = getRandomUsername()
    await createEmailUser(email, password, username)

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
