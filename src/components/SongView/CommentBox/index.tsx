import { useState } from 'react'
import Button from '~/components/Buttons'
import Input from '~/components/Input'
import { Title } from './styles'

const CommentBox = () => {
  const [comment, setComment] = useState('')

  return (
    <>
      <Title>Leave a comment</Title>
      <Input
        textarea
        placeholder="Commenting as Zach"
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <Button
        type="secondary"
        size="md"
        disabled={comment.length === 0}
        style={{ marginTop: '10px' }}
      >
        Comment
      </Button>
    </>
  )
}

export default CommentBox
