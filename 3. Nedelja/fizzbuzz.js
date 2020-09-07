// 15,16,...,105

// FizzBuzz
// 16
// ...
// FizzBuzzZazz

for(let i = 1; i <= 200; i++){
    let s = ''
    if(i % 3 == 0) // !(i % 3)
        s += 'Fizz'
    if(i % 5 == 0)
        s += 'Buzz'
    if(i % 7 == 0)
        s += 'Zazz'
    if(i % 11 == 0)
        s += 'Razz'
    if(s == '')
        s = i

    console.log(s)
}


