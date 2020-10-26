import React from 'react'

const Hello = ({ ime }) => {
  return (
    <>
      <p>--------------------- Hello, {ime}</p>
    </>
      
  )
}



const App = () => {
  return (
    <>
      
      <Hello ime="Darija" />
      <Hello ime="Milan" />
      <Hello ime="Cvijan"/>
      <Hello />
    </>
  )
}


export default App