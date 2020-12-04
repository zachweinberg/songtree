import { Comment as CommentType } from '~/types'
import {
  CommentAuthor,
  CommentBody,
  CommentDate,
  Container,
  TopRow,
} from './styles'

interface Props {
  comment: CommentType
}

const Comment = ({ comment }: Props) => {
  return (
    <Container>
      <TopRow>
        <CommentAuthor>{comment.author}</CommentAuthor>
        <CommentDate>{comment.createdAt} ago</CommentDate>
      </TopRow>
      <CommentBody>{comment.text}</CommentBody>
    </Container>
  )
}

export default Comment
