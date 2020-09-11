// Написати програм који рачуна укупну цену рецепта

let s1 = {
    ime: 'Паприка',
    kolicina: 0.4,
    cena: 120
}

let s2 = {
    ime: 'Јаје',
    kolicina: 3,
    cena: 15.3
}

let recept = {
    ime: 'Паприка са јајима',
    sastojci: [s1,s2]
}

let ukupnaCena = 0

for(let i = 0; i < recept.sastojci.length; i++){
    let trenutniSastojak = recept.sastojci[i]
    ukupnaCena += trenutniSastojak.cena * trenutniSastojak.kolicina
}

console.log(ukupnaCena)


let x = [s1,s2]
for(let i = 0; i < x.length; i++){
    let trenutniSastojak = x[i]
    ukupnaCena += trenutniSastojak.cena * trenutniSastojak.kolicina
}


