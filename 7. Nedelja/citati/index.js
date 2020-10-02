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

const ubaceniCitati = []
let id = 0

const listaCitata = document.querySelector('#lista')
const btnAdd = document.querySelector('#btnAdd')
const inputText = document.querySelector('#input-text')

citati.forEach(citat => {
    dodajCitat(citat.citat,citat.glasovi)
})

// for(let citat of citati){
//     const pText = document.createElement('p')
//     pText.textContent = citat.citat

//     const pVotes = document.createElement('p')
//     pVotes.textContent = citat.glasovi

//     listaCitata.append(pText,pVotes,document.createElement('hr'))
// }

// for(let i = 0; i < citati.length; i++){
//     const pText = document.createElement('p')
//     pText.textContent = citati[i].citat

//     const pVotes = document.createElement('p')
//     pVotes.textContent = citati[i].glasovi

//     listaCitata.append(pText,pVotes,document.createElement('hr'))
// }


btnAdd.addEventListener('click',() => {
    dodajCitat(inputText.value,0)
})

function dodajCitat(text,votes){
    let id2 = id
    const item = document.createElement('div')
    item.className = 'item'
    const pText = document.createElement('p')
    pText.textContent = text

    const pVotes = document.createElement('p')
    pVotes.textContent = votes

    const btnVote = document.createElement('button')
    btnVote.textContent = 'Vote'
    btnVote.addEventListener('click',() => {
        const pronadjen = ubaceniCitati.find()
        pronadjen.glasovi++
    })

    item.append(pText,pVotes,document.createElement('hr'))
    listaCitata.append(item)

    ubaceniCitati.push(
        {
            id: id,
            citat: text,
            glasovi: votes
        }
    )

    id++

    console.log(ubaceniCitati)
}








