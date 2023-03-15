const header = document.querySelector('header')
const prices = document.getElementsByClassName('price')
const describe = document.getElementsByClassName('h4_describe')
const url_name = document.getElementsByClassName('product-name')
const url_image = document.getElementsByClassName('product-image')
const sm = document.getElementsByClassName('row-btn')
const name__ = document.getElementsByClassName('name__')

const url_product = "http://127.0.0.1:5500/index_p.html"


window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('open')
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home-text', { delay: 150, origin: 'top' })
sr.reveal('.home-img', { delay: 250, origin: 'top' })
sr.reveal('.feature, .product, .cta-content, .contact', { delay: 150, origin: 'top' })



function showMain() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => showData(data))
        .then(data => addEvent(data))
        .then(show2())
}

function showData(data) {
    for (let i = 0; i < url_name.length; i++) {
        describe[i].innerHTML = data[i + 3].describe
        prices[i].innerHTML = data[i + 3].price
    }
    return data
}

function addEvent(data) {
    for (let i = 0; i < url_name.length; i++) {
        url_name[i].addEventListener('click', getIdProduct)
        url_image[i].addEventListener('click', getIdProduct)
        prices[i].addEventListener('click', getIdProduct)
        function getIdProduct() {
            for (let j = 0; j < data.length; j++) {
                if (url_name[i].innerHTML == data[j].name) {
                    localStorage.setItem("ind", data[j].id)
                    window.location.assign(url_product)
                }
            }
        }
    }
}

function show2() {
    fetch('./data.json')
        .then(res => res.json())
        .then(data2 => addEvent2(data2))
}

function addEvent2(data) {
    for (let i = 0; i < sm.length; i++) {
        sm[i].addEventListener('click', getId)

        function getId() {
            for (let j = 0; j < data.length; j++) {
                if (name__[i].innerHTML == data[j].name) {
                    localStorage.setItem("ind", data[j].id)
                    window.location.assign(url_product)
                    break
                }
            }
        }
    }
}

showMain()