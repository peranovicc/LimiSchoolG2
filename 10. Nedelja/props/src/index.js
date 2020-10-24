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
    {/* <Osoba ime={osoba2} kolicina={alkohol2} /> */}
    {/* <Osoba ime={osoba3} kolicina={alkohol3} /> */}
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

/* <Osoba ime={'Pera'} kolicina={13} /> */
/* <Osoba ime={'Zika'} kolicina={50} /> */
const Osoba = ({ ime,kolicina }) => {
  return (
    <div className='osoba'>
      <p>{ime}</p>
      <p>{kolicina}</p>
    </div>
  )
}

const Item = ({todo}) => {
  return (
    <div>
      <p>{todo.text}</p>
      <button>x</button>
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
        osoba1={'jfjdskf'}
        osoba2={osoba2}
        osoba3={osoba3}
        alkohol1={14.0231}
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