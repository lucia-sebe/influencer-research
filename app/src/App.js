import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Main from './pages/main';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
