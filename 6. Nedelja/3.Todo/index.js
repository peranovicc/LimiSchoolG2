const forma = document.querySelector('#form-todo')
const inputText = document.querySelector('#input-text')
const divLista = document.querySelector('#lista')


// На submit форме, направити параграф и убацити га у листу
forma.addEventListener('submit',(event) => {
    event.preventDefault()

    const item = document.createElement('div')
    item.className = 'item'
        const par = document.createElement('p')
        par.textContent = inputText.value

        const button = document.createElement('button')
        button.textContent = 'x'

        button.addEventListener('click',(e) => {
            item.remove()
        })

        item.append(par,button) // Не ради са appendChild

    item.addEventListener('click',() => {
        if(par.style.textDecoration == '')
            par.style.textDecoration = 'line-through'
        else 
            par.style.textDecoration = ''
    })
    divLista.appendChild(item)
    inputText.value = '' // Ресетовање поља на крају функције
})

