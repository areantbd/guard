import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1"})

export function getPosts() {
  return http.get("/posts")
}
export function getPostDetail(id) {
  return http.get(`/posts${id}`)
}