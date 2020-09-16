// function imeFunkcije(par1,par2){
//     // тело ф-је

//     return // Шта функција враћа
// }

// function zbir(gg,ff){
//     // ... 
//     return gg + ff
// }

// let x = 7.2
// let y = 3.3

// function min2(a,b){
//     let min = a
//     if(b < min){
//         min = b
//     }

//     return min
// }



// console.log(zbir(x,y))
// console.log(razlika(x,y))
// console.log(proizvod(x,y))
// console.log(kolicnik(x,y))

// Написати функцију која исписује површину круга (параметар r)
// Написати функцију која враћа површину круга (параметар r)


// Написати функцију која враћа да ли је година преступна или није

function isLeap(year){
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
        return true
    }
    else{
        return false
    }
}


console.log(isLeap(1943))
console.log(isLeap(21045))
console.log(isLeap(2014))







