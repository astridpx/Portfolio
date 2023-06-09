import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
          {/* <Projects /> */}
          <About />
          <Projects />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
