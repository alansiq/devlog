import React from 'react'
import PostItem from './PostItem'
import { postListStyles } from 'styles'

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <div className="blog-main">
      {posts.length > 0 ? posts.map((post) => (
        <PostItem post={post} key={post.id} />
      )) : <h3 className="blog-placeholder">My blog posts will show up here!</h3>
      }
      <style jsx global>{postListStyles}</style>
    </div>
  )
}

export default PostList
