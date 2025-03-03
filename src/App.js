import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Schedule from './Components/Schedule';

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;