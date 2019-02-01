import React from 'react'
import { Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group'

const Photo = props => {
  const { post, i, comments } = props
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img
            // src={post.display_src}
            src={`https://loremflickr.com/400/400?random=${i}`}
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
          <button onClick={props.increment.bind(null, i)} className="likes">
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

export default Photo
