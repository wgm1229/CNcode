import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "@/views/home/Home.js"
import Course from "@/views/course/Course.js"
import About from "@/views/about/About.js"
import SimplifyList from "@/views/list/List.js"
import Article from "@/views/home/article/Article.js"
import User from "@/views/user/User"
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/home")
    },
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: ":type", //不要带'/'
        element: <SimplifyList />,
      },
    ],
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
  {
    path: "/user/:loginname",
    element: <User />,
  },
  {
    path: "/Course",
    element: <Course />,
  },
  {
    path: "/About",
    element: <About />,
  },
])
export default router
