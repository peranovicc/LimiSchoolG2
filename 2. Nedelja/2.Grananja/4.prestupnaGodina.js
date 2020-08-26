// Одредити да ли је година преступна
 
// 1. Година је дељива са 4
// 2. Година није дељива са 100 или јесте дељива са 400

let godina = 2100

if(godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)){
    console.log(`${godina}. је преступна`)
}
else{
    console.log(`${godina}. није преступна`)
}

// if(godina % 4 == 0){
//     if(godina % 100 != 0 || godina % 400 == 0){
//         console.log('jeste')
//     }
//     else{
//         console.log('nije')
//     }
// }
// else{
//     console.log('nije prestupna')
// }