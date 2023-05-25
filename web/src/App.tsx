import './App.css'
import { Routes, Route } from "react-router-dom"
import PostsScreen from './components/screens/PostsScreen'
import MainScreen from './components/screens/MainScreen'
import AboutUs from './components/screens/AboutUs'

function App() {
  return (
   <>
    <Routes >
      <Route path='/' element={<MainScreen />}/>
      <Route path='/conocenos' element={<AboutUs />}/>
      <Route path='/posts' element={<PostsScreen />}/>
    </Routes>
   </>
  )
}

export default App
