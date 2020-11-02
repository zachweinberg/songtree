// import { NextApiRequest, NextApiResponse } from 'next'
// import { fetchSong } from '~/lib/songs'

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== 'GET') {
//     return res.status(404).json({ error: 'Not found' })
//   }

//   try {
//     const songID = req.query
//     const song = await getSong(songID)
//     res.status(200).json(song)
//   } catch (err) {
//     console.error(err)
//     res.status(400).json({ error: 'Error' })
//   }
// }

// export default handler
