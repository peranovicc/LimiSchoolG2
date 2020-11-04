import React from 'react'

const Kontakt = ({kontakt,setImenik}) => {
    return (
        <div className="kontakt">
            <p>{kontakt.ime} --- {kontakt.broj}</p> 
            <button onClick={() => {
                if(window.confirm(`Да ли сте сигурни да желите да обришете контакт: ${kontakt.ime}`)){
                    setImenik(imenik => imenik.filter(k => k.id !== kontakt.id))
                }
            }}>x</button>   
        </div>
    )
}

const Imenik = ({imenik,setImenik}) => {
    return (
        <div>
            <p>Сортирај</p>
            <button onClick={() => {
                setImenik(n => [...n].sort((a,b) => a.ime > b.ime ? 1 : -1))
            }}>↓</button>
            <button onClick={() => {
                setImenik(n => [...n].sort((a,b) => a.ime < b.ime ? 1 : -1))
            }}>↑</button>
            <hr />
        {imenik.map(kontakt => <Kontakt key={kontakt.id} kontakt={kontakt} setImenik={setImenik} />)}
        </div>
    )
}

export default Imenik