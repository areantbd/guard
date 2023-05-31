
import axios from 'axios'
import PostCard from '../../components/post-card/PostCard'
import { useEffect, useState } from 'react'

interface Post{
  title: string,
  content: string,
  image: string,
  id: number
}

function PostsScreen() {
  const [posts, setPosts] = useState<Array<Post>>()

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/posts")
      .then((data) => setPosts(data.data))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className='mt-5'>
      {posts && posts.map((post) => (
          <PostCard {...post} key={post.id} />
      ))}
    </div>
  )
}

export default PostsScreen