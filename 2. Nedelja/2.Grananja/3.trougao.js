// На основу три унете странице, одредити да ли је троугао валидан
// Збир сваке две странице је већи од треће

let a = 3
let b = 5
let c = 4

if(a + b > c && (a + c > b && b + c > a)){
    console.log('Валидан')
}
else{
    console.log('Није валидан')
}

