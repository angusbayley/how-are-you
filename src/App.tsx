import React from 'react';
import './App.scss';
import NeedsPanel from './components/NeedsPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          How are you
        </p>
      </header>
      <hr/>
      <NeedsPanel/>
    </div>
  );
}

export default App;
