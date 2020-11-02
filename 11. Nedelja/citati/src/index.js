import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ citati }) => {
  const [selected, setSelected] = useState(0) // Селектован је нулти цитат
  const [votes,setVotes] = useState((new Array(citati.length).fill(0)))
  const [best,setBest] = useState(0) // позиција најбољег цитата
  
  return (
    <div>
      <p>{citati[selected]}</p>  {/* Приказујемо селектован цитат */}
      <p>{votes[selected]}</p>
      <button onClick={() => {
        // 1. Копирање низа
        // let tmp = []
        // for(let el of votes){
        //   tmp.push(el)
        // }
        let tmp = [...votes]
        // 2. Мењање копираног низа
        tmp[selected]++

        // 3. Мењање стања
        setVotes(tmp)
      }}>vote</button>

      <button onClick={() => {
        setSelected((selected + 1) % citati.length)
      }}>Next</button>
      <h1>BEST</h1>
      <p>{citati[best]}</p>
    </div>
  )
}

const citati = [
  'I\'m not dumb. I just have a command of thoroughly useless information.',
  'Чудно је како је мало потребно да будемо срећни, и још чудније: како нам често баш то мало недостаје!',
  'Што не боли – то није живот, што не пролази – то није срећа',
  'Звезданог неба и људског срца никад се човек неће моћи нагледати',
  'Be yourself; everyone else is already taken.',
  'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
  'If you tell the truth, you don\'t have to remember anything.',
  'Insanity is doing the same thing, over and over again, but expecting different results.',
  'A day without sunshine is like, you know, night.'
]

ReactDOM.render(
    <React.StrictMode>
        <App citati={citati}/>
    </React.StrictMode>,
    document.getElementById('root')
)