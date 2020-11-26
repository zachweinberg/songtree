import { useState } from 'react'
import ReactHowler from 'react-howler'

interface Props {
  src: string
}

const PlayButton = ({ src }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => setIsPlaying(true)
  const pause = () => setIsPlaying(false)

  return (
    <div>
      <ReactHowler src={[src]} playing={isPlaying} />
      <button onClick={play}>play</button>
      <button onClick={pause}>pause</button>
    </div>
  )
}

export default PlayButton
