import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeBox from "./views/home/Home";
import Top from "./views/TopNav/TopNav.jsx";
import About from './views/about/About.jsx'
import Course from './views/course/Course.jsx'
import All from "./views/all/All";
import Good from "./views/good/Good";
function App () {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<HomeBox />}></Route>
        <Route path="/home" element={<HomeBox />}>
          <Route index path="all" element={<All />} />
          <Route path="good" element={<Good />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
