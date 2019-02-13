import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'
import Comments from './Comments'
import { PostsContext } from '../context/PostsContext'
import { CommentsContext } from '../context/CommentsContext'

const Single = props => {
  const { state: posts } = useContext(PostsContext)
  const { state: comments } = useContext(CommentsContext)
  const { match } = props
  const { postId } = match.params

  const i = posts.findIndex(post => post.code === postId)
  const post = posts[i] || []

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments comments={comments[postId]} {...props} />
    </div>
  )
}

Single.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
}

export default Single
