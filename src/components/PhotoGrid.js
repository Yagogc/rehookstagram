import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions/actions'
import Photo from './Photo'

const PhotoGrid = props => {
  const { posts } = props
  return (
    <div className="photo-grid">
      {posts.map((post, i) => (
        <Photo {...props} key={i.toString()} i={i} post={post} />
      ))}
    </div>
  )
}

PhotoGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
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

const PhotoGridConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid)

export default PhotoGridConnected
