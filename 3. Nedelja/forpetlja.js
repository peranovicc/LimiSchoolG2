// // for(let i = 0; i < 10; i++){
// //     console.log('rec',i)
// // }

// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }

// // Исписати само дељиве са 3, од 1 до 100
// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0){
//         console.log(i)
//     }
// }

// Исписати бројеве дељиве са 5  од n до m

// let n = 13
// let m = 80
// for(n,m; n <= m ; n++){
//     if(n % 5 == 0){
//         console.log(n)
//     }
// }

// for(let i = n; i <= m; i++){
//     if(i % 5 == 0){
//         console.log(i)
//     }
// }

// од 1 до 100
// Ако је број дељив са 3, написати: Перин број,
// Ако је дељив са 7 : Жикин број
// Ако је дељив са 11: Анин број

// for(let i = 1; i <= 100; i++){
//     let s = ''
//     if(i % 3 == 0)
//         s += 'Перин'
//     else if(i % 7 == 0)
//         s += 'Жикин'
//     else if(i % 11 == 0)
//         s += 'Анин'
//     else
//         s += i

//     console.log(s)
// }

// FizzBuzz 
// За бројеве од 1 до 100
// Ако је дељив са 3 исписати Fizz
// Ако је дељив са 5 исписати Buzz
// Ако је дељив са оба исписати FizzBuzz
// Ако није дељив ни са чим исписати сам број

// Додатак:
// Ако је дељив са 7 додати Zazz
// 3 5 7  FizzBuzzZazz
// 3 7 FizzZazz
// 5 7 BuzzZazz

for(let i = 1; i <= 100; i++){
    if(i % 5 == 0 && i % 3 == 0)
        console.log('FizzBuzz')
    else if(i % 5 == 0)
        console.log('Buzz')
    else if(i % 3 == 0)
        console.log('Fizz')
    else 
        console.log(i)
}




