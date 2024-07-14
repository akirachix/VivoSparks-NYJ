import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Podcast from './Podcast'
// import Videos from './Videos';
// import OurPortFolio from './Portfolio'
// import BlogPost from './Writing'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/videos" element={<Videos />} />
        <Route path="/portfolio" element={< OurPortFolio/>} />
        <Route path="/writing" element={< BlogPost/>} />
         */}
         <Route path="/podcast" element={<Podcast/>} />
        </Routes>
      
    </Router>
  );
}

export default App






