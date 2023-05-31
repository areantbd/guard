import { Routes, Route } from "react-router-dom"
import PostsScreen from './components/screens/PostsScreen'
import MainScreen from './components/screens/MainScreen'
import AboutUs from './components/screens/AboutUs'
import "./sass/style.scss"
import PostDetailScreen from './components/screens/PostDetailScreen'

function App() {
  return (
   <>
    <Routes >
      <Route path='/' element={<MainScreen />}/>
      <Route path='/conocenos' element={<AboutUs />}/>
      <Route path='/posts' element={<PostsScreen />}/>
      <Route path='/posts/:id' element={<PostDetailScreen />}/>
    </Routes>
   </>
  )
}

export default App
