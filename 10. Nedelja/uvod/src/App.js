import React from 'react'

const Greeting = ({ name, age }) => {
  return (
    <>
    <p>Име: {name}</p>
    <p>Године: {age}</p>
    </>
  )
}
// Треба да узме бројеве x и y
// Треба да испише њихову разлику и њихов збир (2 параграфа)
const Broj = ({x , y}) => {
  return (
    <>
      <p>{x - y}</p>
      <p>{x + y}</p>
    </>
  )
}

const Zbir = ({ niz }) => {
  let sum = 0
  niz.forEach(el => {
    sum += el
  })

  return (
    <p>{sum}</p>
  )
}

const App = () => {

  let niz = ['Pera','Zika']
  let a = 5
  let b = 3

  let nizOcena = [3,4,3,5,4,3,2,1,3]

  return (
    <>
      <Greeting name={niz[0]} age="45" />
      <Greeting name={niz[1]} />
      <Broj x={a} y={b + 1} />
      <Zbir niz={nizOcena} />
      <Prosek niz={nizOcena} />
    </>
  )
}


export default App
