const openUnicornButtons = document.querySelectorAll('[data-unicorn-target]')
const closeUnicornButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openUnicornButtons.forEach(button => {
    button.addEventListener('click', () => {
        const kill = document.querySelector(button.dataset.unicornTarget) //grabs the #modal from html; queryselector selects based on the target
        openUnicornButtons(kill)
    })
})

overlay.addEventListener('click', () => {
    const kill = document.querySelectorAll('.kill.active')
    kill.forEach(kill => {
        closeModal(kill)
    })
})

closeUnicornButtons.forEach(button => {
    button.addEventListener('click', () => {
        const kill = button.closest('.kill') //returns the class just called modal, not the others under it
        closeModal(kill)
    })
})

function openUnicorn(kill){
    if (kill == null) return
    kill.classList.add('active')
    overlay.classList.add('active')
}

function closeUnicorn(kill){
    if (kill == null) return
    kill.classList.remove('active')
    overlay.classList.remove('active')
} 