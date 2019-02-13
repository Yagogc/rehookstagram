import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { CommentsContext } from '../context/CommentsContext'
import { PostsContext } from '../context/PostsContext'

import { increment } from '../actions/actions'

const Photo = ({ post, i }) => {
  const { state: comments } = useContext(CommentsContext)
  const { dispatch } = useContext(PostsContext)

  const handleCliclLike = e => {
    e.preventDefault()
    dispatch(increment(i))
  }

  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img
            src={`https://picsum.photos/400/400/?random?image=${i}`}
            alt={post.caption}
            className="grid-photo"
          />
        </Link>

        <CSSTransitionGroup
          transitionName="like"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <span key={post.likes} className="likes-heart">
            {post.likes}
          </span>
        </CSSTransitionGroup>
      </div>

      <figcaption>
        <p>{post.caption}</p>
        <div className="control-buttons">
          <button
            onClick={e => handleCliclLike(e)}
            className="likes"
            type="button"
          >
            <span role="img" aria-label="like">
              💜
            </span>{' '}
            {post.likes}
          </button>
          <Link className="button" to={`/view/${post.code}`}>
            <span className="comment-count">
              <span role="img" aria-label="comment">
                💬
              </span>{' '}
              {comments[post.code] ? comments[post.code].length : 0}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}

Photo.propTypes = {
  i: PropTypes.number.isRequired,
  post: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
}

export default Photo
