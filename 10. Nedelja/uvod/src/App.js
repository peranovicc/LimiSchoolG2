import React from 'react'

// Компоненте су функције које враћају неки JSX елемент
const Hello = () => {
  return (
    <p>kompoenntnas</p>
  )
}

const App = () => {
  return (
    // JSX fragment
    <> 
      <Hello />
      <Hello />
    </>
  )
}


export default App
