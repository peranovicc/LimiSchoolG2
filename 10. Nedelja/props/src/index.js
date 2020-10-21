import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ ime }) => {
  return (
    <h1>{ime}</h1>
  )
}

const Content = ({ osoba1,osoba2,osoba3,alkohol1,alkohol2,alkohol3 }) => {
  let o1 = {
    osoba: osoba1,
    alkohol: alkohol1
  }

  return (
    <>
    {/* <Osoba ime={o1.osoba} kolicina={o1.alkohol} /> */}
      <p>
        {o1.osoba} {o1.alkohol}
      </p>
      <p>
        {osoba2} {alkohol2}
      </p>
      <p>
        {osoba3} {alkohol3}
      </p>
    </>
  )
}
const Ukupno = ({ukupno}) => {
  return (
    <p>Укупно пића: {ukupno}</p>
  )
}

const TMP = ({el}) => {
  return (
    <>
    <p>----</p>
      <p>{el}</p>
    </>
  )
}

const Osoba = ({ covek }) => {
  return (
    <div className='ossfsoba'>
      <p>{covek.ime}</p>
      <p>{covek.alkohol}</p>
    </div>
  )
}

const App = () => {
  const pab = {
    ime: 'Jolly',
    osobe: [
      {
        ime: 'Пера',
        alkohol: 5
      },
      {
        ime: 'Ана',
        alkohol: 7
      },
      {
        ime: 'Жика',
        alkohol: 13
      }
    ]
  }
  
  // const total = alkohol1 + alkohol2 + alkohol3

  let niz = [12,21,4,431,51,6,7,8,9,10]



  return (
    <div>
      {/* <Header ime={pab.ime} />
      <Content
        osoba1={osoba1}
        osoba2={osoba2}
        osoba3={osoba3}
        alkohol1={alkohol1}
        alkohol2={alkohol2}
        alkohol3={alkohol3}
      />
      <Ukupno 
        ukupno={total}
      /> */}
      {/* {niz.map(el => <TMP el={el} />)} */}
      
      {
      pab.osobe.filter(osoba => osoba.alkohol > 6)
               .map(osoba => <Osoba covek={osoba} />)
      }

    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)