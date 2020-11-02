import { NextApiRequest, NextApiResponse } from 'next'
import { searchSpotify } from '~/lib/spotify'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Not found' })
  }

  try {
    const { searchTerm } = req.body
    const results = await searchSpotify(searchTerm)
    res.status(200).json(results)
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: 'Error' })
  }
}

export default handler
