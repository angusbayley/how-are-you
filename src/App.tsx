import React from 'react';
import './App.scss';
import NeedsPanel from './components/NeedsPanel'
import domtoimage from "dom-to-image";

function App() {

  const copyImage = () => {
    const node = document.getElementsByClassName("needs-panel")[0]
    domtoimage.toPng(node, {
      width: 735,
      height: 294,
      style: {
        margin: 0,
        padding: 0
      }
    }).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          How are you
        </h1>
      </header>
      <NeedsPanel/>
      <input type="button" value="Get screenshot" onClick={copyImage} className="download-button"/>
    </div>
  );
}

export default App;
