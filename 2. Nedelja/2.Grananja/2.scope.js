// let x = 4

// {
//     let x = 3
//     console.log(x)
// }

// console.log(x)

// let живи у scope-у (Досег) у ком је направљен
// var живи у глобалном scope-у
// const живи у scope-у (Досег) у ком је направљен


{
    {
        let x = 56
    }
    {
        let x = 3
        {
            let x = 5
            {
                console.log(x)
            }
        }
    }
    console.log(x)
}

let x = 100

if(x < 12){
    let x = 50
}

console.log(x)


