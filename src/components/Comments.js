import React from 'react'

const Comment = props => {
  const { user, text, i, remove, postId } = props
  return (
    <div className="comment" key={i}>
      <p>
        <strong>{user}</strong>
        {text}
        <button
          onClick={() => remove(null, postId, i)}
          className="remove-comment"
        >
          &times;
        </button>
      </p>
    </div>
  )
}

class Comments extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const { postId } = this.props.match.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  render() {
    const { postId } = this.props.match.params
    const { postComments = [] } = this.props
    return (
      <div className="comments">
        {postComments.map((comment, i) => (
          <Comment
            {...comment}
            key={i}
            i={i}
            remove={this.props.removeComment}
            postId={postId}
          />
        ))}
        <form
          onSubmit={this.handleSubmit}
          ref="commentForm"
          className="comment-form"
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments
