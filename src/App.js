// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import HomePage from './pages/Home/home';
import AboutPage from './pages/About/about';
import ResumePage from './pages/Resume/resume';
import WorkPage from './pages/Work/work';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

<header>
    <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/about" element={<AboutPage/>}/>
      <Route path ="/work" element={<WorkPage/>}/>
      <Route path ="/resume" element={<ResumePage/>}/>
      <Route path="*" element={<div>error</div>} />
    </Routes>
</header>

    </div>
  );
}

export default App;
