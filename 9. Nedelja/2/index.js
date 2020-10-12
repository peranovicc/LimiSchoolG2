const inputIme = document.querySelector('#input-ime')
const inputBroj = document.querySelector('#input-broj')
const btnDodaj = document.querySelector('#btn-dodaj')
const divLista = document.querySelector('#lista')

let id = 0
let kontakti = []

function dodajNaStranicu(kontakt){
    const par = document.createElement('p')
    par.textContent = kontakt.ime + '-----' + kontakt.broj

    divLista.appendChild(par)
    console.log(kontakt)
}

btnDodaj.addEventListener('click',() => {
    let kontakt = {
        id: id,
        ime: inputIme.value,
        broj: inputBroj.value
    }
    id++
    
    if(true){ // Провера да ли постоји име већ
        if(confirm('Да ли желите да замените број')){
            // замена
        }
    }
    else{
        dodajNaStranicu(kontakt)
        kontakti.push(kontakt)
    }
    
})