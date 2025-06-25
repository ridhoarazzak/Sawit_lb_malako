import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SawitMap from './components/SawitMap';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/peta" element={<SawitMap />} />
      </Routes>
    </Router>
  );
}

export default App;
