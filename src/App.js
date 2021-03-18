import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [teilnehmer, setTeilnehmer] = useState([]);

  useEffect(() => {  
    if (teilnehmer.length===0) {
      fetch("/teilnehmer").then( (httpResponse) => {
        
        httpResponse.json().then( antwortObjekt => {
          const leute = antwortObjekt;
          setTeilnehmer(leute);
        })
      }).catch( fehler => { console.error(fehler)});
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>eli-react-server </p>
        <ul>
          {teilnehmer.map( (einTeilnehmer) => {
            return <li>{einTeilnehmer}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
