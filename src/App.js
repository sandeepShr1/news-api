import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
