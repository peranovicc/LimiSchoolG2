function saberi(a,b){
    return a + b
}
const saberi2 = function(a,b){ // Анонимна функција
    return a + b
}
const saberi3 = (a,b) => a + b // Анонимна, стреличаста (Arrow) функција


// Написати програм који филтрира елементе низа, тако да узима парне
// Прави нови низ

function isEven(num){
    return num % 2 == 0
}

function veciOd5(broj){
    return broj > 5
}



let niz = [2,3,1,2,1,323,45,13,15,64,105,35,335]
let resenje = niz.filter(el => el % 2 == 0)

console.log(resenje)


function ispisi(broj){
    console.log(broj)
}
let zbir = 0

// niz.forEach(ispisi)
niz.forEach(el => {
    console.log(el)
})

console.log(zbir)











