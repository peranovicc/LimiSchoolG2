// Написати површину и обим круга
// За унет полупречник r

// r*r*pi - P
// 2*r*pi - O

let r = 43.231
let povrsina = r ** 2 * Math.PI
let obim = r * 2 * Math.PI

console.log('Површина је:',povrsina)
console.log(`Обим је: ${obim}`) // Template string - backticks

console.log(`Површина је ${povrsina}, а обим је ${obim}`)