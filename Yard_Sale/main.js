
const menuDesk = document.querySelector('.navbar-email')
const menuchange = document.querySelector('.desktop-menu')

const m_bar_menu = document.querySelector('.menu')
const m_menu = document.querySelector('.mobile-menu')

const icon_shop = document.querySelector('.navbar-shopping-cart')
const change_shop = document.querySelector('.product-detail')

const lista = [menuchange,m_menu,change_shop]


function close(variable){
    for (i=0 ; i < lista.length ; i++){
        if (!lista[i].classList.contains('inactive') && lista[i] != variable){
            lista[i].classList.toggle('inactive')
        }
    }
}
menuDesk.addEventListener('click',change_desktop)
m_bar_menu.addEventListener('click',change_mobile)
icon_shop.addEventListener('click',Shop_interactive)

function change_desktop(){
    close(menuchange)
    menuchange.classList.toggle('inactive')
}
function change_mobile(){
    close(m_menu)
    m_menu.classList.toggle('inactive')
}
function Shop_interactive(){
    close(change_shop)
    change_shop.classList.toggle('inactive')
}