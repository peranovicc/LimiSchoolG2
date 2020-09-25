const dugme = document.getElementById('dugme') // document.querySelector('#dugme')
const paragraf = document.querySelector('#paragraf')
// console.log(dugme)
let broj = 0

function dugmeKliknuto(){
    // console.log('Hello iz dugmeta')
    paragraf.textContent += broj
    broj++
}
dugme.addEventListener('click',dugmeKliknuto)


const pCount = document.querySelector('#brojac')
const btnAdd = document.querySelector('#add')
const btnSub = document.querySelector('#substract')

let count = 0

function add(){
    count++
    pCount.textContent = count
}

function substract(){
    count--
    pCount.textContent = count
}

// btnAdd.addEventListener('click',add)

btnAdd.addEventListener('click',() => {
    count++
    pCount.textContent = count
})

btnSub.addEventListener('click',substract)














