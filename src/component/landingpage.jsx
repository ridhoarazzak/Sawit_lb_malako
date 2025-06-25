import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f5f5f5'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Webmap Kebun Sawit Nagari Lubuk Malako
      </h1>
      <Link
        to="/peta"
        style={{
          backgroundColor: '#2f855a',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          textDecoration: 'none'
        }}
      >
        Lihat Peta
      </Link>
    </div>
  );
}
