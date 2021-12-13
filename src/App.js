import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0)


  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} />} />
        <Route exact path="/about" element={<About setProgress={setProgress} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
