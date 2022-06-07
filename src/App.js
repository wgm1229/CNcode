import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import Top from "./views/TopNav/TopNav.jsx";
import About from './views/about/About.jsx'
import Course from './views/course/Course.jsx'
function App () {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
