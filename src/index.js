import './less/index.less'

window.onload = function () {
    const heading = document.querySelector('h1')
    heading.textContent = 'ADVENTURE AWAITS!'
}

let navLinks = document.querySelectorAll('.nav-link')
navLinks.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue'
})
let button = document.querySelectorAll('.btn')

button.addEventListener('click', (event) => { event.target.style.backgroundColor = 'red'; });

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('hi')
})

document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = 'oops'
})
window.addEventListener('keydown', evt => {
if (evt.key == 1){
    document.body.innerHTML = 'XOXO'
}
})
document.body.addEventListener('mouseover', evt => {
    const {clientX, clientY} = evt 
})
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseover', evt => {
        destination.style.fontWeight = 'bold'
    })
}