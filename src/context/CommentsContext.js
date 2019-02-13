import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import commentsData from '../data/comments'

const initialState = { ...commentsData }
const CommentsContext = React.createContext(initialState)

const CommentsActions = {
  ADD_COMMENT: 'ADD_COMMENT',
  REMOVE_COMMENT: 'REMOVE_COMMENT',
}

const reducer = (state, action) => {
  switch (action.type) {
    case CommentsActions.ADD_COMMENT:
      return {
        ...state,
        [action.postId]: [
          ...state[action.postId],
          {
            user: action.author,
            text: action.comment,
          },
        ],
      }
    case CommentsActions.REMOVE_COMMENT:
      return {
        ...state,
        [action.postId]: [
          ...state[action.postId].slice(0, action.i),
          ...state[action.postId].slice(action.i + 1),
        ],
      }
    default:
      return state
  }
}

const CommentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CommentsContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentsContext.Provider>
  )
}
export { CommentsContext, CommentsProvider, CommentsActions }

CommentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
