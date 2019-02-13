import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import postsData from '../data/posts'

const initialState = [...postsData]
const PostsContext = React.createContext(initialState)

const reducer = (state, action) => {
  const i = action.index

  switch (action.type) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1),
      ]
    default:
      return state
  }
}

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  )
}
export { PostsContext, PostsProvider }

PostsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
