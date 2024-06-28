// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PopularDestinations from './components/PopularDestinations';
import Recommended from './components/Recommended';
import DestinationPage from './pages/DestinationPage';

function App() {
  const location = useLocation();
  const isDestinationPage = location.pathname.startsWith('/destination/');

  return (
    <div className="App">
      {!isDestinationPage && <Header />}
      <div className='container'>
        <Routes>
          <Route path="/" element={
            <>
              <PopularDestinations />
              <Recommended />
            </>
          } />
          <Route path="/destination/:id" element={<DestinationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
