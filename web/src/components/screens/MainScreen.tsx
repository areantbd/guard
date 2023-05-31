import axios from 'axios'
import PostCard from '../../components/post-card/PostCard'
import { useEffect, useState } from 'react'

interface Post{
  title: string,
  content: string,
  image: string,
  id: number
}

function MainScreen() {
 const [posts, setPosts] = useState<Array<Post>>()
 const lastPosts = posts?.slice(-3).reverse()

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/posts")
      .then((data) => setPosts(data.data))
      .catch((error) => console.error(error))
  }, [])
  return (
    <>
      <header className='border bg-light container'>
        <h1 className='text-decoration-underline mt-2 mb-4'>Escola infantil A casiña da árbore</h1>
        <h3>
          Somos unha escola infantil para nenos dende 0 ata 3 anos que conta coas mellores e máis seguras instalacións para que nenas e nenos poidan desenvolver as habilidades e capacidades acordes coa súa idade. 
          <br/>
          <br/>
          Ubicada en Portomarín, estamos abertos de luns a venres de 9:00  a 19:00 
        </h3>
      </header>
      <section className='mt-5 row'>
        {posts && lastPosts?.map((post) => (
          <div className='col-4'>
            <PostCard title={post.title} image={post.image} key={post.id} content={''} id={post.id} />
          </div>
        ))}
      </section>
    </>
  )
}

export default MainScreen