import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>
      <Counter />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
