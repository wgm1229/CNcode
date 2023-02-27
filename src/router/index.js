import { createBrowserRouter, redirect } from "react-router-dom"
import TopNav from "@/views/topNav/TopNav.js"
import Footer from "@/views/footer/Footer.js"
import Home from "@/views/home/Home.js"
import Course from "@/views/course/Course.js"
import About from "@/views/about/About.js"
import SimplifyList from "@/views/list/List.js"
import Article from "@/views/home/article/Article.js"
import User from "@/views/user/User"
import { Fragment } from "react"
const layout = (element) => {
  return (
    <Fragment>
      <TopNav />
      {element}
      <Footer />
    </Fragment>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/home/all")
    },
  },
  {
    path: "/home",
    element: layout(<Home />),
    children: [
      {
        path: ":type", //不要带'/'
        element: <SimplifyList />,
      },
    ],
  },
  {
    path: "/article/:id",
    element: layout(<Article />),
  },
  {
    path: "/user/:loginname",
    element: layout(<User />),
  },
  {
    path: "/Course",
    element: layout(<Course />),
  },
  {
    path: "/About",
    element: layout(<About />),
  },
])
export default router
