const p = document.querySelector('#brojac-nav')

let brojac = 0
setInterval(() => {
    brojac += 1
    p.textContent = brojac
},1000)