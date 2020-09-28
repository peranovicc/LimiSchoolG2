const bezDuplikata = (arr) => {
    let tmp = []

    arr.forEach(el => {
        if(!tmp.includes(el)){
            tmp.push(el)
        }
    })

    return tmp
}

const brojDuplikata = (arr) => {
    let tmp = []

    arr.forEach(el => {
        if(!tmp.includes(el)){
            tmp.push(el)
        }
    })

    return arr.length - tmp.length
}

let niz = [1,2,3,2,2,1,5,100,-23,55,3,54,213]
 
// niz = [1,3,2]   ...niz -> 1,3,2
// Math.min(...niz) -> Math.min(1,3,2)
function indexElementa(arr,x){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x)
            return i
    }
}

const sortirajNiz = (arr) => {
    let tmp = []

    let N = arr.length
    for(let i = 0; i < N; i++){
        let min = Math.min(...arr)
        tmp.push(min)
        arr.splice(arr.indexOf(min),1)
    }

    return tmp
}

console.log(sortirajNiz(niz))

