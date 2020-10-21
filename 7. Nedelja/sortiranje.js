let niz = [4,2,1,5,6,3,7,8,4,5,7,10,11,22,21,30]
console.log(niz)

// Сортира низ лексикографски (ASCII) *Ако не проследимо функцију

niz.sort((a,b) => a - b)

// Функција мења места елементима ако је: a  веће од  b

console.log(niz)

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

console.log(citati)

citati.sort((a,b) => a.glasovi - b.glasovi)

console.log(citati)



