import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import TopNav from './views/top/TopNav'
import Footer from './views/footer/Footer'
import Course from './views/course/Course'
import About from './views/about/About'
function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Course" element={<Course />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
