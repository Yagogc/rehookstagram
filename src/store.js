import { createStore, combineReducers } from 'redux'

import { comments, posts } from './reducers/index'

// import comments from './data/comments'
// import posts from './data/posts'

const reducers = combineReducers({
  comments,
  posts,
})

const store = createStore(
  reducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
