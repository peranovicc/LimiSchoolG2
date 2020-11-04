import React, { useState } from 'react'
import {v1 as uuidv1} from 'uuid'

const Form = ({imenik,setImenik}) => {
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if(imenik.some(kontakt => kontakt.ime === name)){
                if(window.confirm(`Да ли желите да промените број контакта: '${name}' ?`)){
                    setImenik(imenik => 
                        imenik.map(kontakt => 
                            kontakt.ime === name ? {...kontakt,broj:number} : kontakt
                        )
                    )
                }
            }
            else if(imenik.some(kontakt => kontakt.broj === number)){
                if(window.confirm(`Да ли желите да промените име контакта са бројем: '${number}' ?`)){
                    setImenik(imenik => 
                        imenik.map(kontakt => 
                            kontakt.broj === number ? {...kontakt,ime:name} : kontakt
                        )
                    )
                }
            }
            else{
                let kontakt = {
                    id: uuidv1(),
                    ime: name,
                    broj: number
                }
                setImenik(imenik => [...imenik,kontakt])
            }
        }}>
            <input type="text" placeholder="Name..." onChange={(e) => setName(e.target.value)} />  
            <input type="text" placeholder="Number..." onChange={(e) => setNumber(e.target.value)} />  
            <input type="submit" value="Add" />  
        </form>
    )
}

export default Form