import axios from 'axios'
import PostCard from '../post-card/PostCard'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../section/Section'

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
      <header className='main-header bg-light container bg-opacity-50 rounded py-1 px-3'>
        <h1 className='text-decoration-underline mt-2 mb-4'>Escola infantil A casiña da árbore</h1>
        <h4>
          Somos unha escola infantil para nenos dende 0 ata 3 anos que conta coas mellores e máis seguras instalacións para que nenas e nenos poidan desenvolver as habilidades e capacidades acordes coa súa idade. 
          <br/>
          <br/>
          Ubicada en Portomarín, estamos abertos de luns a venres de 9:00  a 19:00 
        </h4>
        <div className='d-flex mb-2'>
          <Link to={'/conocenos'} className='btn btn-outline-light ms-auto'>Saber máis</Link>
        </div>
      </header>
      <Section className='mt-5 row container mx-auto' title='Posts' icon='book'>
        <div className='d-flex mb-2 mt-1'>
          <Link to={'/posts'} className='btn btn-outline-light ms-auto'>Ver Posts</Link>
        </div>
        {posts && lastPosts?.map((post) => (
          <div className='col-4 mt-2'>
            <PostCard title={post.title} image={post.image} key={post.id} content={''} id={post.id} />
          </div>
        ))}
      </Section>
    </>
  )
}

export default MainScreen