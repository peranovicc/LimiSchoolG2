let x = 4
let y = 3
let z = 43

let min // = Math.min(x,y,z)
let max // = Math.max(x,y,z)

min = x
max = z

if(y < min){
    min = y
}

if(z < min){
    min = z
}

if(y > max){
    max = y
}

if(x > max){
    max = x
}


console.log(min,max)

