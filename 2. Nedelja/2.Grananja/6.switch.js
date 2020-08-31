// За унети дан у недељи, исписати да ли је викенд или радни дан

let dan = 8 // 1,2,3,4,5,6,7

// if(dan >= 1 && dan <= 5){
//     console.log('Радни дан')
// }
// else if(dan == 6 || dan == 7){
//     console.log('Викенд')
// }
// else{
//     console.log('Погрешан унос за дан (мора од 1 до 7)')
// }

switch(dan){
    case 1: 
        console.log('Понедељак')
        break
    case 2:
        console.log('Уторак')
        break
    case 3:
        console.log('Среда')
        break
    case 4:
        console.log('Четвртак')
        break
    case 5:
        console.log('Петак')
        break
    case 6:
        console.log('Субота')
        break
    case 7:
        console.log('Недеља')
        break
    default:
        console.log('Грешка')
        break
}

// У зависности од датог месеца у години, 
// исписати колико он има дана

let mesec = 4 // 1,2,3,4,5,6,7,8,9,10,11,12
let godina = 452

switch(mesec){
    case 1:case 3:case 5:case 7:case 8:case 10:case 12:
        console.log(31)
        break
    case 4:case 6:case 9:case 11:
        console.log(30)
        break
    case 2:
        if(godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)){
            console.log(29)
        }
        else{
            console.log(28)
        }
}





