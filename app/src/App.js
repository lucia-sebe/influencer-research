import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './pages/main';

function App() {
  return (
        <Routes>
          <Route path="/home" element={<Main />} />
        </Routes>
  );
}

export default App;
