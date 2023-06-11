import { Routes, Route, useLocation } from "react-router-dom"
import "./sass/style.scss"
import PostsScreen from './components/screens/PostsScreen'
import MainScreen from './components/screens/MainScreen'
import AboutUs from './components/screens/AboutUs'
import PostDetailScreen from './components/screens/PostDetailScreen'
import CreatePost from "./components/screens/CreatePost"
import { useEffect } from "react"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
   <>
    <ScrollToTop />
    <Routes >
      <Route path='/' element={<MainScreen />}/>
      <Route path='/conocenos' element={<AboutUs />}/>
      <Route path='/posts' element={<PostsScreen />}/>
      <Route path='/posts/:id' element={<PostDetailScreen />}/>
      <Route path='/posts/create-post' element={<CreatePost />}/>
    </Routes>
   </>
  )
}

export default App
