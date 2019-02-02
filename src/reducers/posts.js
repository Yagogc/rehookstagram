import postsData from '../data/posts'

const initialState = [...postsData]

const posts = (state = initialState, action) => {
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

export default posts
