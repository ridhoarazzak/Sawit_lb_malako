// 5. File: /src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SawitMap from './components/SawitMap';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/peta" element={<SawitMap />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
