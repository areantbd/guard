import { Link } from "react-router-dom"
type Props = {
  title: string,
  content: string,
  image: string, 
  id: number
}

function PostCard({title, content, image, id}: Props) {
  return (
    <Link to={`/posts/${id}`} className="text-decoration-none text-dark">
      <div className="container main-post-card">
        <h1>{title}</h1>
        <h3>{content}</h3>
        <img src={image} alt={title} width={"90%"} className="mt-3"/>
      </div>
    </Link>
  )
}

export default PostCard