{
    // Написати програм који исписује 
    // двоструку вредност првих пет бројева

    // let a = 1
    // let b = 5

    // while(a <= b){
    //     console.log(2*a)
    //     a++
    // }

    for(let i = 1; i <= 5; i++){
        console.log(2*i)
    }
}

{
    // Испис бројева од K до N дељивих са A

    let K = 3
    let N = 23
    let A = 4

    for(let i = K; i < N; i++){
        if(i % A == 0){
            console.log(i)
        }
    }
}

{
    // Исписати суму првих 10 бројева

    // let i = 1
    // let sum = 0

    // while(i <= 10){
    //     sum += i // sum = sum + i
    //     i++
    // }

    // console.log(sum)
    let sum = 0
    for(let i = 1; i <= 10; i++){
        sum += i
    }
    console.log(sum)

}

{
    // Исписати производ првих 10 бројева
    let proizvod = 1

    for(let i = 1; i <= 10; i++){
        proizvod *= i
    }

    console.log(proizvod)
}

{
    // Исписати следећу структуру помоћу звездица за унето N
    //
    //          N = 8
    //
    //          ********
    //          ********
    //          ********
    //          ********
    //          ********
    //          ********
    //          ********
    //          ********
 
    let N = 10
    let red = ''

    for(let i = 0; i < N; i++){
        red += '*'
    }

    for(let i = 0; i < N; i++){
        console.log(red)
    }
}

{
    // Написати програм који рачуна 
    // збир парних, а производ непарних бројева 
    // од K до N

    let K = 7
    let N = 23

    let zbir = 0, prozivod = 1

    for(let i = K; i < N; i++){
        if(i % 2 == 0){
            zbir += i
        }
        else{
            prozivod *= i
        }
    }

    console.log(zbir,prozivod)
}


{
    // Исписати следећу структуру помоћу звездица за унето N и M
    //
    //          N = 8 , M = 3
    //
    //          ********
    //          ********
    //          ********


  

}

{
    // Исписати следећу структуру помоћу звездица за унето N 
    //
    //          N = 8
    //
    //          ********
    //          *      *
    //          *      *
    //          *      *
    //          *      *
    //          *      *
    //          *      *
    //          ********



}
{
    // Исписати марио пирамиду (с лева)
    let N = 5

    for(let i = 0; i < N; i++){ 
        console.log('*'.repeat(i + 1)) // Ако идемо од 1 до N, онда само i
    }
}

{
    // Исписати марио пирамиду (здесна)
    let N = 5
    
    // for(let i = 0; i < N; i++){
    //     console.log(' '.repeat(N-i-1) + '*'.repeat(i+1))
    // }

    
    for(let i = 1; i <= N; i++){
        console.log(' '.repeat(N-i) + '*'.repeat(i))   
    }
}
