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