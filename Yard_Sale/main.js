
const menuDesk = document.querySelector('.navbar-email')
const menuchange = document.querySelector('.desktop-menu')

const m_bar_menu = document.querySelector('.menu')
const m_menu = document.querySelector('.mobile-menu')

const icon_shop = document.querySelector('.navbar-shopping-cart')
const change_shop = document.querySelector('.product-detail')

const cardcontainer = document.querySelector('.cards_container')

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
body.addEventListener('click',cerrar)

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

const productList = []

productList.push({
    name: 'bike',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push( {
    name: "bike",
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push( {
    name: 'bike',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)
function render(arr){
    for (product of arr){
        const productcard = document.createElement('div')
        productcard.classList.add('Product-card')

        const img_product = document.createElement('img')
        img_product.setAttribute('src', product.image)
        img_product.setAttribute('alt', 'image')

        const product_info = document.createElement('div')
        product_info.classList.add('product-info')
        
        const product_info_div = document.createElement('div')
        const precio=document.createElement('p')
        precio.innerText ='$' + product.price
        const nombre=document.createElement('p')
        nombre.innerText= product.name

        const create_figure = document.createElement('figure')
        const img_logo = document.createElement('img')
        img_logo.setAttribute('src','./icons/bt_add_to_cart.svg')
        img_logo.setAttribute('alt', 'logo')

        cardcontainer.appendChild(productcard)
        productcard.appendChild(img_product)
        productcard.appendChild(product_info)
        product_info.appendChild(product_info_div)
        product_info_div.appendChild(precio)
        product_info_div.appendChild(nombre)
        product_info.appendChild(create_figure)
        create_figure.appendChild(img_logo)
    }
}

render(productList)