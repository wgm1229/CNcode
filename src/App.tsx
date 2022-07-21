import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import Top from './views/top/Top'
import Footer from './views/footer/Footer'
function App() {
  return (
    <BrowserRouter>
      <Top />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
