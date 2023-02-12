const menuDesk = document.querySelector('.navbar-email')
const menuchange = document.querySelector('.desktop-menu')
menuDesk.addEventListener('click',change)

function change(){
    menuchange.classList.toggle('inactive')
}