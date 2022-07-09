// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './pages/About';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages';

function App() {

  return (
    <div>

      <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
      </Router>

    </div>
  )
}

export default App;
