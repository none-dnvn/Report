const total = document.getElementsByClassName('total_')
const price = document.getElementsByClassName('price_')
const quantity = document.getElementsByClassName('w-25 pl-1')
const subTotal = document.getElementById('subTotal_')
const shipping = document.getElementById('shipping_')
const totalCha = document.getElementById('total_cha')
const calTotal = document.getElementsByClassName('ml-auto')
const remove = document.getElementsByClassName('rm_')
const row = document.getElementsByClassName('row_')

for (let i = 0; i < total.length; i++) {
    quantity[i].addEventListener('change', getTotal)
    quantity[i].addEventListener('change', showPrice)

    function getTotal() {
        total[i].innerHTML = '$'+ String(price[i].innerHTML.substring(1) * quantity[i].valueAsNumber)   
    }
}

for (let i = 0; i < total.length; i++) {
    remove[i].addEventListener('click', zeroQuantity)
    remove[i].addEventListener('click', showPrice)

    function zeroQuantity() {
        quantity[i].innerHTML = 0 
        quantity[i].valueAsNumber = 0
        total[i].innerHTML = 0
        row[i].style.display = "none"
    }
}

calTotal[0].addEventListener('click', showPrice)

let sum = 0
function showPrice() {
    for (let i = 0; i < total.length; i++) {
        sum += Number(total[i].innerHTML.substring(1))
    }

    subTotal.innerHTML = '$' + sum
    shipping.innerHTML = '$5'
    totalCha.innerHTML = '$' + (sum + 5)
    if (sum === 0) {
        shipping.innerHTML = 0
        totalCha.innerHTML = 0
    }
    sum = 0
}