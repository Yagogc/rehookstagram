import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Comment = ({ user, text, i, remove, postId }) => (
  <div className="comment" key={i}>
    <p>
      <strong>{user}</strong>
      {text}
      <button
        onClick={() => remove(postId, i)}
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
  remove: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
}

const Comments = ({ match, postComments, addComment, removeComment }) => {
  const formRef = useRef(null)
  const authorRef = useRef(null)
  const commentRef = useRef(null)
  const { postId } = match.params

  const handleSubmit = e => {
    e.preventDefault()
    const authorValue = authorRef.current.value
    const commentValue = commentRef.current.value
    addComment(postId, authorValue, commentValue)
    formRef.current.reset()
  }

  return (
    <div className="comments">
      {postComments.map((comment, i) => (
        <Comment
          {...comment}
          key={`comment-${i.toString()}`}
          i={i}
          remove={removeComment}
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
  postComments: PropTypes.arrayOf(PropTypes.object),
  removeComment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
}
Comments.defaultProps = {
  postComments: [],
}

export default Comments
