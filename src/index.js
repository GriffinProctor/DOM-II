import './less/index.less'

window.onload = function () {
    const heading = document.querySelector('h1')
    heading.textContent = 'ADVENTURE AWAITS!'



    window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })

})
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = 'oops'
})
window.addEventListener('keydown', evt => {
    if (evt.key == 1){
        document.body.innerHTML = 'XOXO'
    }
    })
    document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt 
    console.log(`mouse is at ${clientX}, ${clientY}`)
})
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}
let navLinks = document.querySelectorAll('.nav-link')
navLinks.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue'
})
let button = document.querySelectorAll('.btn')

button.addEventListener('click', (event) => { event.target.style.backgroundColor = 'red'; });


}






