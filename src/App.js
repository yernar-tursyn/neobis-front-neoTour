import React from 'react';
import './App.css';
import Header from './components/Header';
import Discover from './components/Discover';
import PopularDestinations from './components/PopularDestinations';
import Recommended from './components/Recommended';

function App() {
  return (
    <div className="App">
        <Header />
      <div className='container'>
        <Discover />
        <PopularDestinations />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
