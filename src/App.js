import React from 'react';
import './App.css';
import Chimp from './components/chimp';
import Background from './components/day-bgimage';
import Evolve from './components/evolve';
import Laserman from './components/laserman';
import Moon from './components/moon';
import Sun from './components/sun';
import Ted from './components/tedx';

function App() {
  const appStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="App" style={appStyle}>
      <Background />
      <Sun/>
      <Moon/>
      <Chimp />      
      <Laserman />
      <Evolve />
      <Ted />
    </div>
  );
}

export default App;
