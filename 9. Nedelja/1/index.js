const inputNumber = document.querySelector('#input-number')
const btnPlus = document.querySelector('#btn-plus')
const btnMinus = document.querySelector('#btn-minus')
const pNumber = document.querySelector('#number')

let number = 0

btnPlus.addEventListener('click',() => {
    number += Number(inputNumber.value)
    pNumber.textContent = number
})

btnMinus.addEventListener('click',() => {
    if(confirm('Да ли сте сигурни')){
        number -= Number(inputNumber.value)
        pNumber.textContent = number
    }
})


