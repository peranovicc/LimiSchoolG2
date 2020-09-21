// Написати функцију која враћа најмањи број у низу
// let niz = [2,213,123,1,231,2,13]
function najmanji(niz){
    let min = niz[0]
    for(let el of niz){
        if(el < min)    
            min = el
    }
    return min
}
let x = [1,2,3,-5,23,4,2,-6,2,432,21]
let ysjhfgkaf = [2342,234,23,4324,2,34,23]
console.log(najmanji(ysjhfgkaf))
// Написати функцију која враћа просечну вредност низа
function prosek(niz){
    let sum = 0
    for(let el of niz){
        sum += el
    }
    return sum / niz.length
}
console.log(prosek(x))

// Написати функцију која враћа низ парних бројева
function parni(niz){
    let niz2 = []
    for(let el of niz){
        if(el % 2 == 0)
            niz2.push(el)
    }

    return niz2
}
console.log(parni(x))



// Испиши просек парних бројева низа
let niz = [1,2,3,2,6,9]
let nizParnih = parni(niz)
console.log(prosek(nizParnih))
// console.log(prosek(parni(niz)))


// Написати функцију која враћа низ позитивних бројева
function pozitivni(niz){
    return niz.filter(el => el >= 0)
}

// Написати функцију која враћа просек парних бројева
function prosekParnih(niz){
    return prosek(parni(niz))
}

// Написати функцију која враћа просек позитивних бројева
function prosekPozitivnih(niz){
    return prosek(pozitivni(niz))
}




// arr.push(el) // Додаје el на крај низа
// arr.pop() // Избацује последњи елемент из низа и враћа га

console.log(arr.pop()) // 34
console.log(arr) // [32,12,32,1232,1312,312,423,564]

// arr.slice(start,end) // Враћа низ елемената од старта (укључујући) до енд-а (искључујући)
console.log(arr.slice(1,4)) // [12,35,1232]

// arr.unshift(el) // Додаје el на почетак низа 
// arr.shift() // Избацује почетни елемент из низа и враћа га

console.log(arr.shift()) // 32
console.log(arr) // [12,35,1232,1312,312,423,564,34]

// arr.splice(start,count) 
// Почевши од start индекса, брише count елемената и враћа избрисане

console.log(arr.splice(3,2)) // [1232,1312]
console.log(arr) // [32,12,35,312,423,564,34]

let arr = [32,12,35,1232,1312,312,423,564,34]
console.log(arr.slice(2,4).pop()) // 1232



// Написати програм који из ниа избацује прву четворку
// [2,3,4,2,4,5,3] -> [2,3,2,4,5,3]

// Написати програм који из низа избацује све четворке из низа
// [2,3,4,2,4,5,3] -> [2,3,2,5,3]

// Написати функцију која враћа првих N чланова низа
// let niz = [1,21,3,4,5,6,7,8,9]  // first(niz,3) -> [1,21,3]
//                                    first(niz,1) -> [1]
//                                    first(niz,5) -> [1,21,3,4,5]
function first(arr,N){

}

// Написати функцију која враћа последњих N чланова низа
// let niz = [1,21,3,4,5,6,7,8,9]  // last(niz,3) -> [7,8,9] || [9,8,7]
function last(arr,N){

}


// Написати функцију која претвара из целзијуса у фаренхајт
// Написати функцију која претвара из фаренхајта у целзијус
// °F = °C × 1.8 + 32
// °C = (°F - 32) / 1.8


// Написати функцију која враћа све бројеве дељиве са 5
// [2,3,15,23,20,2,123,10,56,11] -> [15,20,10]

function deljiviSa5(arr){
    return arr.filter(x => x % 5 == 0)
}

const deljiviSa5 = arr => arr.filter(x => !(x % 5))




