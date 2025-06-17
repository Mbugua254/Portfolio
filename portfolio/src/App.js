import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

import Links from './Components/Links'
import Projects from './Components/Projects'


// Initialize Google Analytics with your Measurement ID
//const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID; 
//ReactGA.initialize(TRACKING_ID);

const App = () => {
  //const location = useLocation();

  //useEffect(() => {
    // Send a page view event on route change
   // const pagePath = window.location.hash.replace("#", "") || "/";
   // ReactGA.send({ hitType: "pageview", page: pagePath });
 // }, [location]);

  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/links" element={<Links />} />
        
      </Routes>
      
    </div>
  );
};

export default App;