// Исписати првих 100 бројева (почевши од 1)

{
    let i = 1
    while(i <= 100){
        console.log(i)
        i++
    }
}
// Исписати првих 100 бројева дељивих са 3
{
    // let i = 3
    // let count = 100
    // while(count > 0){
    //     console.log(i)
    //     i += 3
    //     count--  
    // }

    // i = 3 , 6 , 9 , 12 , 15 , 18
    // count = 0 , 1 , 2 , 3 , 4 , 5
    // 3 6 9 12 15

    let i = 1
    let count = 0
    while(count < 100){
        if(i % 3 == 0){
            console.log(i)
            count++
        }

        i++
    }

}
