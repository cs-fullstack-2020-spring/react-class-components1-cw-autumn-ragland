import React from 'react';
import './App.css';
import SayHello from './components/SayHello';
import SayHowdy from './components/SayHowdy';

function App() {
  return (
    <div className="App">
      <h1>Greetings App</h1>
      <SayHello/>
      <SayHowdy/>
    </div>
  );
}

export default App;
