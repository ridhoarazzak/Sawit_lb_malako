import React from 'react'; import { Link } from 'react-router-dom';

export default function LandingPage() { return ( <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center justify-center text-center px-6"> <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">Webmap Sawit Nagari Lubuk Malako</h1> <p className="text-lg md:text-xl text-green-900 mb-6 max-w-xl"> Peta interaktif yang menampilkan sebaran kebun sawit aktif berbasis data spasial dari Google Earth Engine dan visualisasi Deck.gl </p> <a href="/" className="px-6 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition">Lihat Petanya</a> </div> ); }

                                       
