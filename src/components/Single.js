import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Photo from './Photo'
import Comments from './Comments'
import * as actions from '../actions/actions'

const Single = props => {
  const { match, posts, comments } = props
  const { postId } = match.params

  const i = posts.findIndex(post => post.code === postId)

  const post = posts[i] || []

  const postComments = comments[postId]

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  )
}

Single.propTypes = {
  comments: PropTypes.objectOf(PropTypes.array).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const SingleConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single)

export default SingleConnected
