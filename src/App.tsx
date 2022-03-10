import React from 'react';
import './App.scss';
import NeedsPanel from './components/NeedsPanel'
import domtoimage from "dom-to-image";

function App() {

  const copyImage = () => {
    const node = document.getElementsByClassName("needs-panel")[0]
    // domtoimage.toPng(node)
    //   .then(function (dataUrl) {
    //     const img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
    //   })
    //   .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    //   });
    domtoimage.toJpeg(node, { quality: 0.95 })
        .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    });

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          How are you
        </p>
      </header>
      <NeedsPanel/>
      <input type="button" value="Click me" onClick={copyImage}/>
    </div>
  );
}

export default App;
