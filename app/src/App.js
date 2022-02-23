import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Main from './pages/main'
import Maps from './pages/maps'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mapa" element={<Maps />} />
    </Routes>
  );
}

export default App;
