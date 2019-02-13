import React, { useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { CommentsContext } from '../context/CommentsContext'
import { addComment, removeComment } from '../actions/actions'

const Comment = ({ user, text, i, dispatch, postId }) => (
  <div className="comment" key={i}>
    <p>
      <strong>{user}</strong>
      {text}
      <button
        onClick={() => dispatch(removeComment(postId, i))}
        className="remove-comment"
        type="button"
      >
        &times;
      </button>
    </p>
  </div>
)

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
}

const Comments = ({ match, comments }) => {
  const formRef = useRef(null)
  const authorRef = useRef(null)
  const commentRef = useRef(null)
  const { dispatch } = useContext(CommentsContext)
  const { postId } = match.params

  const handleSubmit = e => {
    e.preventDefault()
    const authorValue = authorRef.current.value
    const commentValue = commentRef.current.value
    dispatch(addComment(postId, authorValue, commentValue))
    formRef.current.reset()
  }

  return (
    <div className="comments">
      {comments.map((comment, i) => (
        <Comment
          {...comment}
          key={`comment-${i.toString()}`}
          i={i}
          dispatch={dispatch}
          postId={postId}
        />
      ))}
      <form onSubmit={handleSubmit} ref={formRef} className="comment-form">
        <input type="text" ref={authorRef} placeholder="author" />
        <input type="text" ref={commentRef} placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
}
Comments.defaultProps = {
  comments: [],
}

export default Comments
