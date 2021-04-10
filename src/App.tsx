import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatusBar from './components/StatusBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          How are you
        </p>
      </header>
      <hr/>
      <StatusBar/>
    </div>
  );
}

export default App;
