// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

<header>
<Router>
          <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path ="/about" element={<AboutPage/>}/>
          </Routes>
        </Router>
</header>

    </div>
  );
}

export default App;
