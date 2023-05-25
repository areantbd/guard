
type Props = {
  title: string,
  content: string,
  image: string
}

function PostCard({title, content, image}: Props) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{content}</h3>
      <img src={image} alt={title} width={"50%"}/>
    </>
  )
}

export default PostCard