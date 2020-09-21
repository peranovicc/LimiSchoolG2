const app = document.querySelector('#app')

    // <div class="wrapper">
//         <ul id="nav">
//             <li>Prvi</li>
//             <li class="crveno">Drugi</li>
//             <li class="crveno">Treci</li>
//         </ul>
    // </div> 

const promenljiva1 = document.createElement('div')
promenljiva1.className = 'wrapper'
app.appendChild(promenljiva1)

    const promenljiva2 = document.createElement('h1')
    promenljiva2.textContent = 'Welcome'
    promenljiva1.appendChild(promenljiva2)

    const prom3 = document.createElement('a')
    prom3.href = 'https://google.com'
    prom3.textContent = 'Klikni ovde'
    promenljiva1.appendChild(prom3)

    const prom4 = document.createElement('ul')
    prom4.id = 'nav'
    promenljiva1.appendChild(prom4)

        const li1 = document.createElement('li')
        li1.textContent = 'Prvi'

        const li2 = document.createElement('li')
        li2.className = 'crveno'
        li2.textContent = 'Drugi'

        const li3 = document.createElement('li')
        li3.className = 'crveno'
        li3.textContent = 'Treci'

        prom4.append(li1,li2,li3)

