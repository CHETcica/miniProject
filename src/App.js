import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import Album from './pages/Album';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/album/:username" element={<Album />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
