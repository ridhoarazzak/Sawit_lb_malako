import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SawitMap from './components/SawitMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/peta" />} />
        <Route path="/peta" element={<SawitMap />} />
      </Routes>
    </Router>
  );
}

export default App;
