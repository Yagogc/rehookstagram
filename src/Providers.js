import React from 'react'
import PropTypes from 'prop-types'

import { CommentsProvider } from './context/CommentsContext'
import { PostsProvider } from './context/PostsContext'

const Providers = ({ children }) => {
  return (
    <PostsProvider>
      <CommentsProvider>{children}</CommentsProvider>
    </PostsProvider>
  )
}

export default Providers

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
