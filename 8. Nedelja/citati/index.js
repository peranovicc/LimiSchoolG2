let citati = [
    {
        id: 0,
        citat: 'Sve što ti je u ovom životu potrebno su neznanje i samopouzdanje, i uspeh je zagarantovan',
        glasovi: 5
    },
    {
        id: 1,
        citat: 'Uspeh je koliko visoko odskočiš kad udariš dno',
        glasovi: 3
    },
    {
        id: 2,
        citat: 'Da bi uspeo tvoja želja za uspehom mora biti veća od tvog straha od neuspeha',
        glasovi: 17
    },
    {
        id: 3,
        citat: 'Izgleda nemoguće, dokle god se ne završi',
        glasovi: 7
    },
    {
        id: 4,
        citat: 'Ništa nije nemoguće za onoga ko ima volju pokušati',
        glasovi: 13
    },
    {
        id: 5,
        citat: 'Odavno sam zapazio da uspešni ljudi retko sede i čekaju da im se stvari dešavaju. Oni izađu i dese se stvarima',
        glasovi: 21
    },
    {
        id: 6,
        citat: 'Uspeh je pronalaženje zadovoljstva u davanju više od onoga koliko uzimaš',
        glasovi: 11
    },
    {
        id: 7,
        citat: 'Ako sloboda išta znači onda znači pravo da se ljudima kaže ono što ne žele čuti',
        glasovi: 15
    }
]

let id = 8
const inputText = document.querySelector('#input-text')
const btnAdd = document.querySelector('#btn-add')
const btnSort = document.querySelector('#btn-sort')
const divLista = document.querySelector('#lista')
const divNajbolji = document.querySelector('#najbolji')

function dodajCitatDOM(limun){
    const divCitat = document.createElement('div')
    divCitat.className = 'item'

        const pText = document.createElement('p')
        pText.textContent = limun.citat
        const pVotes = document.createElement('p')
        pVotes.textContent = limun.glasovi
        const btnVote = document.createElement('button')
        btnVote.textContent = 'Vote'

        btnVote.addEventListener('click',() => {
            limun.glasovi++
            pVotes.textContent = limun.glasovi
            let citat = najboljiCitat(citati)
            dodajNajboljiCitat(citat)
        })

        divCitat.append(pText,pVotes,btnVote)
    divLista.appendChild(divCitat)
}

citati.forEach(dodajCitatDOM)

btnAdd.addEventListener('click',() => {
    let noviCitat = {
        id: id,
        citat: inputText.value,
        glasovi: 0
    }
    id++
    
    dodajCitatDOM(noviCitat)
    citati.push(noviCitat)
})

function najboljiCitat(citati){
    let najbolji = citati[0]
    citati.forEach(citat => {
        if(najbolji.glasovi < citat.glasovi) 
            najbolji = citat
    })

    return najbolji
}

let citat = najboljiCitat(citati)

function dodajNajboljiCitat(mango){
    divNajbolji.innerHTML = ''
    const divCitat = document.createElement('div')
    divCitat.className = 'item'
        const pText = document.createElement('p')
        pText.textContent = mango.citat
        const pVotes = document.createElement('p')
        pVotes.textContent = mango.glasovi
        
    
        divCitat.append(pText,pVotes)
    divNajbolji.appendChild(divCitat)
}

dodajNajboljiCitat(citat)

let nijeOpadajuce = true
btnSort.addEventListener('click',() => {
    divLista.innerHTML = ''
    
    nijeOpadajuce ? citati.sort((a,b) => b.glasovi - a.glasovi)
              : citati.sort((a,b) => a.glasovi - b.glasovi)
            
    nijeOpadajuce = !nijeOpadajuce

    citati.forEach(dodajCitatDOM)
})







