let a = 3

if(a > 0){
    var P = a ** 2 // a * a
    let O = 4 * a
    console.log(P,O)     
}
else{
    console.log('Грешка')
}

console.log(P)


// && - и
// || - или

{
    let a = 3
    let b = 5

    if(a > 0 && b > 0){
        console.log(a,b)
    }
    else{
        console.log('грешка')
    }
}

{
    let a = -10
    let b = -5

    if(a + b > 0 || b - a > 0){
        console.log(a,b)
    }
    else{
        console.log('грешка')
    }
}




