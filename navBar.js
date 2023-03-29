const hamburger = document.querySelector('.hamburger')
const hamburgerIcon = document.querySelector('.hamburger i')
const dropdownHamburger = document.querySelector('.dropdownHamburger')


hamburger.onclick = function(){
    dropdownHamburger.classList.toggle('open')
    const isOpen = dropdownHamburger.classList.contains('open')

    hamburgerIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}