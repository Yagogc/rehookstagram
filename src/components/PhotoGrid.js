import React, { useContext } from 'react'
import Photo from './Photo'
import { PostsContext } from '../context/PostsContext'

const PhotoGrid = props => {
  const { state: posts } = useContext(PostsContext)
  return (
    <div className="photo-grid">
      {posts.map((post, i) => (
        <Photo {...props} key={i.toString()} i={i} post={post} />
      ))}
    </div>
  )
}

export default PhotoGrid
