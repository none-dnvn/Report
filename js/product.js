const file = './data.json'
const p_quantity = 7


function show(id) {
    fetch(file)
    .then(response => response.json())
    .then(data => showProduct(data, id))
}

function showProduct(data, id) {
    const name = document.getElementById('name_')
    const price = document.getElementById('price_')
    const quantity = document.getElementById('quantity_')
    const image = document.getElementById('img_')

    for (let i = 0; i < p_quantity; i++) {
        if (data[i].id == id) {
            name.innerHTML = data[i].name
            price.innerHTML = data[i].price
            image.setAttribute('src', data[i].image)
            break
        }
    }
}


show(localStorage.getItem("ind"))