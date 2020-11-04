import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter';
import Form from './components/Form';
import Imenik from './components/Imenik';

const App = ({start}) => {
  const [imenik,setImenik] = useState(start)
  const [filter,setFilter] = useState('')

  return (
    <>
      <Form imenik={imenik} setImenik={setImenik} />
      <hr />
      <Filter setFilter={setFilter} />
      <hr />
      <Imenik imenik={imenik.filter(kontakt => kontakt.ime.toLowerCase().includes(filter.toLowerCase()))} setImenik={setImenik} />
    </>
  )
}

const imenik = [
  {
    id: 1,
    ime: 'Пера',
    broj: '+38164124564'
  },
  {
    id: 2,
    ime: 'Габријела',
    broj: '+38164598564'
  },
  {
    id: 3,
    ime: 'Максимилијан',
    broj: '+38164112789'
  },
  {
    id: 4,
    ime: 'Перица',
    broj: '+38165444564'
  },
  {
    id: 5,
    ime: 'Брица',
    broj: '+38168148964'
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App start={imenik} />
  </React.StrictMode>,
  document.getElementById('root')
);
