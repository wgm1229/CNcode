import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './views/home/Home'
import TopNav from './views/top/TopNav'
import Footer from './views/footer/Footer'
import Course from './views/course/Course'
import About from './views/about/About'
import Article from './views/home/article/Article'
type path = {
  to: string
}
function Redirect(param: path) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(param.to)
  })
  return null
}
function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <main>
        <Routes>
          <Route path="/" element={<Redirect to={'/home'} />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/article/:id" element={<Article />}></Route>
          <Route path="/Course" element={<Course />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
