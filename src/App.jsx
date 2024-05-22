import { useState } from 'react';
import './App.css';

function App() {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    let newString = outputString + letter;
    newString = newString.replace(/([A-Z])\1{2,}/g, (match) => '_'.repeat(Math.floor(match.length / 3)));
    setOutputString(newString);
  };

  return (
    <div className="App">
      <div className="grid">
        {Array.from({ length: 26 }, (_, i) => (
          <div
            key={i}
            className="tile"
            onClick={() => handleClick(String.fromCharCode(65 + i))}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
}

export default App;