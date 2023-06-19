import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

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
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/posts/${id.id}`)
      .then((data) => setPost(data.data))
      .catch((error) => console.error(error))
  }, [id.id])

  return (
    <div className="safearea">
      <button onClick={() => navigate(-1)} className="btn btn-sm btn-outline-light mb-5">Volver atrás</button>
      <div className=" container d-flex justify-content-between gap-5">
        <div className="my-auto" style={{maxWidth: "50%"}}>
          <h1 >{post?.title}</h1>
          <h3>{post?.content}</h3>
        </div>
        <img className="w-50 rounded" src={post?.image} alt={post?.title} />
      </div>
    </div>
  )
}

export default PostDetailScreen