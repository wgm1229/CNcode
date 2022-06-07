import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeBox from "./views/home/Home";
import Top from "./views/TopNav/TopNav.jsx";
import About from './views/about/About.jsx'
import Course from './views/course/Course.jsx'
import SimplifyList from "./views/list/List";
function App () {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<HomeBox />}></Route>
        <Route path="/home" element={<HomeBox />}>
          <Route index path=":type" element={<SimplifyList />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
