import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home'
import NotFound from './NotFound'
import Forbidden from './Forbidden'
import ProtectedRoute from './ProtectedRoute';
import TwibbonStyleOne from './layout/twibbon/TibbonStyleOne';
import TwibbonTwo from './layout/twibbon/TibbonStyleTwo';
import TwibbonThree from './layout/twibbon/TibbonStyleThree';
import TwibbonFour from './layout/twibbon/TibbonStyleFour';
import TwibbonFive from './layout/twibbon/TibbonStyleFive';

export default function RouterPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Allow /twibbon/style-one route for all screen sizes */}
        <Route path='/' element={<Home />} />
        <Route path='/twibbon/style-one' element={<TwibbonStyleOne />} />
        <Route path='/twibbon/style-two' element={<TwibbonTwo />} />
        <Route path='/twibbon/style-three' element={<TwibbonThree />} />
        <Route path='/twibbon/style-four' element={<TwibbonFour />} />
        <Route path='/twibbon/style-five' element={<TwibbonFive />} />

        {/* Show Forbidden for all other routes on mobile */}
        {/* {isMobile ? (
          <Route path='*' element={<Forbidden />} />
        ) : ( */}
          {/* <>
            <Route
              path='/twibbon/style-one'
              element={
                <ProtectedRoute>
                  <TwibbonStyleOne />
                </ProtectedRoute>
              }
            />
            <Route
              path='/twibbon/style-two'
              element={
                <ProtectedRoute>
                  <TwibbonStyleTwo />
                </ProtectedRoute>
              }
            />

            <Route path='*' element={<NotFound />} />
          </> */}
        
      </Routes>
    </Router>
  );
}
