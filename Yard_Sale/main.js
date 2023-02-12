const menuDesk = document.querySelector('.navbar-email')
const menuchange = document.querySelector('.desktop-menu')
const m_bar_menu = document.querySelector('.menu')
const m_menu = document.querySelector('.mobile-menu')

menuDesk.addEventListener('click',change)
m_bar_menu.addEventListener('click',change_mobile)

function change(){
    menuchange.classList.toggle('inactive')
}
function change_mobile(){
    m_menu.classList.toggle('inactive')
}