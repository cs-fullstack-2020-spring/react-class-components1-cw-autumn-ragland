import React from 'react';
import './App.css';
import BankAccount from './BankAccount';

function App() {
  return (
    <div className="App">
      <h1>Bank App</h1>
      <BankAccount customerName = "Kevin" balance = "1"/>
    </div>
  );
}

export default App;
