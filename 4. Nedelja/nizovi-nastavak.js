// Одредити просечну вредност низа
{
    let niz = [3,4,5,300,4,2,5,5,3,4]

    // let sum = 0
    // for(let i = 0; i < niz.length; i++){
    //     sum += niz[i]
    // }
    // console.log(sum / niz.length)

    // let sum = 0
    // for(let el of niz){
    //     sum += el
    // }
    // console.log(sum / niz.length)
}

// Исписати збир парних и производ непарних бројева низа
// {
//     let niz = [3,42,53,300,4,2,5,5,3,4]
//     let sum = 0, pr = 1
//     for(let el of niz){
//         if(el % 2 == 0)
//             sum += el
//         else 
//             pr *= el
//     }

//     console.log(sum,pr)
// }


// String-ови

{
    // let str = 'Hello world gldf jdflwkv jkfkd kjdsffg'
    // // console.log(str.includes('hell')) // Садржи
    // console.log(str)
    
    // console.log(str.replace('H','Z'))

    // let niz = str.split(' ')
    // console.log(niz)
}

// {
//     // Проверити да ли је стринг валидан (исписати true/false)
//     // Није празан
//     // Има најмање 4 карактера
//     // Има највише 20 карактера

//     let str = '       d f     '

//     if(str.trim() != '' && str.trim().length >= 4 && str.trim().length <= 20)
//         console.log(true)
//     else 
//         console.log(false)


//     // '   sda sds  sdas21    '.trim()  ---> 'sda sds  sdas21'

// }

{
    // Провера email-a
    // Има најмање 10 карактера
    // Садржи реч  ['rs','com','org','srb','edu','co','ru']
    // Садржи карактер   '@'

    let mail = 'comcomcomcomc@.com'
    let domains = ['rs','com','org','srb','edu','co','ru']
    let validno = false

    if(mail.length >= 10 && mail.includes('@'))
        for(let domain of domains)
            if(mail.endsWith('.' + domain))
                validno = true
                
    console.log(validno)
}
