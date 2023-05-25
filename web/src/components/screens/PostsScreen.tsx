
import axios from 'axios'
import PostCard from '../../components/post-card/PostCard'
import { useEffect, useState } from 'react'

function PostsScreen() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/posts")
      .then((data) => setPosts(data.data))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className='mt-5'>
      {posts && posts.map((post: object ) => (
        <PostCard title={''} content={''} image={''} {...post}/>
      ))}
    </div>
  )
}

export default PostsScreen