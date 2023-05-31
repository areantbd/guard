import axios from "axios"
interface Post{
  title: string,
  content: string,
  image: string
  id: number
}

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1"})

export function getPosts()<Array<Post>> {
  return http.get("/posts")
}
export function getPostDetail(id: string) {
  return http.get(`/posts${id}`)
}