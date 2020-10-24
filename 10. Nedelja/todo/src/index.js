import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({za,protiv,uzdrzani}) => {
  let ukupno = za + protiv + uzdrzani

  if(ukupno !== 0){
    return (
      <>
        <p>+ : {za}</p>
        <p>- : {protiv}</p>
        <p>0 : {uzdrzani}</p>
        <p>Ukupno: {ukupno}</p>
        <p>Procenat pozitivnih: {za / ukupno * 100}%</p>
      </>
    )
  }
  else{
    return (
      <p>Nema ocena</p>
    )
  }
}

const App = () => {
  const [pozitivno,setPozitivno] = useState(0)
  const [negativno,setNegativno] = useState(0)
  const [neutralno,setNeutralno] = useState(0)
  return (
    <>
      <button onClick={() => setPozitivno(pozitivno + 1)}>+</button>
      <button onClick={() => setNegativno(negativno + 1)}>-</button>
      <button onClick={() => setNeutralno(neutralno + 1)}>0</button>
      {/* <p>+ : {pozitivno}</p>
      <p>- : {negativno}</p>
      <p>0 : {neutralno}</p>
      <p>Ukupno: {ukupno}</p>
      <p>Procenat pozitivnih: {pozitivno / ukupno * 100}%</p> */}
      <Statistics za={pozitivno} protiv={negativno} uzdrzani={neutralno} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
