import { NextApiRequest, NextApiResponse } from 'next'
import { searchSpotify } from '~/utils/spotify'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = req.body.query
    const results = await searchSpotify()
    res.status(200).json(results)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}

export default handler
