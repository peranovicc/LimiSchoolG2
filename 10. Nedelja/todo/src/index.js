import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [brojac,setBrojac] = useState(0)
  
  return (
    <>
      <p>{brojac}</p>
      <button 
        onClick={
          () => setBrojac(brojac + 1)
        }
      >
        x
      </button>
      <p>{brojac}</p>
      <p>{brojac}</p>
      <p>{brojac}</p>

    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
