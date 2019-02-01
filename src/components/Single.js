import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Photo from './Photo'
import Comments from './Comments'
import * as actions from '../actions/actions'

const Single = props => {
  const { postId } = props.match.params

  const i = props.posts.findIndex(post => post.code === postId)

  const post = props.posts[i] || []

  const postComments = props.comments[postId]

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  )
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
