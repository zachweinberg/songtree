import { useState } from 'react'
import Button from '~/components/Buttons'
import Input from '~/components/Input'
import { submitComment } from '~/lib/api'
import { Title } from './styles'

interface Props {
  username: string
  songID: string
  onSuccess: Function
}

const CommentBox = ({ username, songID, onSuccess }: Props) => {
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmitComment = () => {
    if (comment.length === 0) return

    setSubmitting(true)
    submitComment(comment, songID)
      .then(() => {
        setComment('')
        onSuccess(comment)
      })
      .catch((err) => alert(err.response.data.error))
      .finally(() => setSubmitting(false))
  }

  return (
    <>
      <Title>Leave a comment</Title>
      <Input
        textarea
        placeholder={`Commenting as ${username}`}
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <Button
        onClick={onSubmitComment}
        type="secondary"
        size="md"
        disabled={comment.length === 0 || submitting}
        style={{ marginTop: '10px' }}
      >
        Comment
      </Button>
    </>
  )
}

export default CommentBox
