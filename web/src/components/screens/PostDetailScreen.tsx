import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface Post{
  title: string,
  content: string,
  image: string,
  id: number
}

function PostDetailScreen() {
  const id = useParams()
  const [post, setPost] = useState<Post>()
  console.log(post)

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/posts/${id.id}`)
      .then((data) => setPost(data.data))
      .catch((error) => console.error(error))
  }, [id.id])

  return (
    <div className="mt-5 pt-5 container d-flex justify-content-between gap-5">
      <div className="my-auto" style={{maxWidth: "50%"}}>
        <h1 >{post?.title}</h1>
        <h3>{post?.content}</h3>
      </div>
      <img className="w-50 rounded" src={post?.image} alt={post?.title} />
    </div>
  )
}

export default PostDetailScreen