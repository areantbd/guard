import { Link } from "react-router-dom"
import moment from "moment"
type Props = {
  title: string,
  content: string,
  image: string, 
  id: number,
  createdAt: string,
  date: boolean
}

function PostCard({title, image, id, createdAt, date}: Props) {

  return (
    <Link to={`/posts/${id}`} className="text-decoration-none text-dark">
      <div className="container main-post-card">
        <h1>{title}</h1>
        <img src={image} alt={title} width={200} height={200} className="mt-3 rounded" style={{maxHeight:250}}/>
        {date && <h5 className="text-light text-end fs-6 fst-italic">{moment(createdAt).format("L")}</h5>}
      </div>
    </Link>
  )

}

export default PostCard