import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Photo from './Photo'

const PhotoGrid = props => (
  <div className="photo-grid">
    {props.posts.map((post, i) => (
      <Photo {...props} key={i} i={i} post={post} />
    ))}
  </div>
)

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const PhotoGridConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid)

export default PhotoGridConnected
