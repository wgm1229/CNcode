import TopNav from "@/views/topNav/TopNav.js"
import Footer from "@/views/footer/Footer.js"

import { RouterProvider } from "react-router-dom"
import router from "./router/index"

function App() {
  return (
    <div className="App">
      <TopNav />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
