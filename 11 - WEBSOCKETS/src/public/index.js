const socketClient = io();

socketClient.on('saludoDesdeBack', (message)=>{
    console.log(message);

    socketClient.emit('respuestaDesdeFront', 'Muchas gracias')
})

const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const products = document.getElementById('products');

form.onsubmit = (e) => {
    e.preventDefault();
    const name = inputName.value;
    const price = inputPrice.value;
    socketClient.emit('newProduct', { name, price });
}

socketClient.on('arrayProducts', (array)=>{
    let infoProducts = '';
    array.forEach((prod) => {
        infoProducts += `${prod.name} - ${prod.price} </br>`
    })
    products.innerHTML = infoProducts
})

socketClient.on('message', (msg)=>{
   console.log(msg)
})