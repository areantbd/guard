
import axios from 'axios'
import PostCard from '../post-card/PostCard'
import { useEffect, useState } from 'react'
import ScrollToTop from '../UI/ScrollToTop'
import Section from '../section/Section'

interface Post{
  title: string,
  content: string,
  image: string,
  id: number,
  createdAt: string
  date: boolean
}

function PostsScreen() {
  const [posts, setPosts] = useState<Array<Post>>()

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/posts")
      .then((data) => setPosts(data.data))
      .catch((error) => console.error(error))
    
  }, [])
  

  console.log(posts)
  return (
    <div className='mt-5 pt-5 container'>
      <Section title="Posts" icon='edit' className=''>
        <div className="d-flex flex-wrap gap-1 justify-content-around">
          {posts && posts.map((post) => (
            <PostCard title={post.title} image={post.image} key={post.id} content={''} id={post.id} createdAt={post.createdAt} date={true}/>
            )).reverse()}
          <ScrollToTop />
        </div>
      </Section>
    </div>
  )
}

export default PostsScreen