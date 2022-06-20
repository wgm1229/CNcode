import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import HomeBox from "./views/home/Home";
import Top from "./views/TopNav/TopNav.jsx";
import About from './views/about/About.jsx'
import Course from './views/course/Course.jsx'
import SimplifyList from "./views/list/List";
import Article from "./views/home/article/Article";
import User from "./views/user/User";
function Redirect ({ to }) {
  let navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  })
  return null
}
function App () {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<Redirect to={'/home/all'} />}></Route>
        <Route path="/home" element={<HomeBox />}>
          <Route index path=":type" element={<SimplifyList />} />
        </Route>
        <Route path="/article/:id" element={<Article />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/user/:loginname" element={<User />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
