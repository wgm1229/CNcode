import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import Top from "./views/TopNav/TopNav.jsx";
function App () {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
