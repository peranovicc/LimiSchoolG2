let osoba1 = {
    ime: 'Pera',
    broj: '873421321',
    godine: 23
}

let osoba2 = {
    ime: 'Zika',
    broj: '21312432',
    godine: 31
}

let osoba3 = {
    ime: 'Ana',
    broj: '12312312',
    godine: 19
}

let osobe = [osoba1,osoba2,osoba3]
console.log(osobe[1].ime)


for(let i = 0; i < osobe.length; i++){
    console.log(osobe[i].ime)
}

for(let osoba of osobe){
    console.log(osoba.ime)
}

// Просечан број година људи у низу


