// Селектовање елемената
// const app = document.getElementById('app')
const app = document.querySelector('#app') // Добијамо први елемент који испуњава услов
// const app = document.getElementsByClassName()
// document.querySelectorAll() // Добијамо листу елемената који испуњавају услов


const paragraf1 = document.createElement('p') // Креирање елемента
paragraf1.textContent = 'dsfjksdfs'
paragraf1.className = 'red'
paragraf1.id = 'nasParagraf'

app.appendChild(paragraf1) // Додавање на елемент app

const xxxx = document.createElement('img')
xxxx.src = 'https://avatars1.githubusercontent.com/u/55625232?s=460&u=ee9b0e1212ead673b51990a5c15008e27377a8bb&v=4'
xxxx.alt = 'moja slicica'

app.appendChild(xxxx)


let nizOsoba = ['Pera','Zika','Ana','Lana','Mile','sdfsd','Pera','Zika','Ana','Lana','Mile','sdfsd']

const div = document.createElement('div')
for(let el of nizOsoba){
    const asdf = document.createElement('p')
    asdf.textContent = el

    div.appendChild(asdf)
}

app.appendChild(div)









