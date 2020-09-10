// let x
// let y = 'Zika'
// let z = 'Ana'


// let osobe = ['Pera','Zike','Ana']

// console.log(osobe[7],osobe[2])

// console.log(osobe)
// osobe[1] = 'Zika'
// console.log(osobe)

// Збир свих бројева у низу
// {
//     let niz = [3,1,5,6,12,3,7]
//     let sum = 0
//     for(let i = 0; i < niz.length ;i++){
//         sum += niz[i]
//     }  
//     console.log(sum)
// }


// Додавање у низ
// {
//     let niz = [3,1,5]

//     niz[niz.length] = 2

//     niz.push(33) // Додаје на крај
//     niz.pop() // Скида са краја

//     console.log(niz)

// }

/*
// Наћи најмањи елемент низа
{
    let niz = [5,2,13,7,-3,12,-4,55,3,1]

}

// Наћи највећи елемент низа
{
    let niz = [5,2,13,7,-3,12,-4,55,3,1]
    
}
*/

// {
//     let x = [1,2,5,3]
//     let y = []

//     for(let i = 0; i < x.length; i++){
//         y.push(x[i])
//     }

//     console.log(y)
// }

// Филтрирати (убацити у други низ) елементе низа који су дељиви са 3


{
    let niz = [1,44,53,23,5,123,555,438,9,13,15,17,18]
    let deljiviSa3 = [] // [123,555,438,9,15,18]

    // for(let i = 0; i < niz.length; i++){
    //     if(niz[i] % 3 == 0){
    //         deljiviSa3.push(niz[i])
    //     }
    // }

    for(let el of niz){
        console.log(el)
    }
}