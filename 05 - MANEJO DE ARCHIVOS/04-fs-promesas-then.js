const fs = require('fs');

const path = './file3.txt';

if(fs.existsSync(path)){
    fs.promises.readFile(path, 'utf-8')
        .then((info)=>{
            console.log(info)
            return fs.promises.appendFile(path, 'segundo texto')
        })
        .then(()=>{
            console.log('info agregada con éxito');
            return fs.promises.readFile(path, 'utf-8')
        })
        .catch((error)=>{
            console.log(error);
        })
} else {
    fs.promises.writeFile(path, 'primer texto')
        .then(()=>{
            console.log('archivo creado con éxito');
        })
        .catch((error)=> console.log(error))
}

/* ------------------------------------ - ----------------------------------- */

const products = [
  {
    name: "Iphone",
    price: 500000,
    stock: 50,
  },
  {
    name: "Samsung G20",
    price: 5000,
    stock: 50,
  },
  {
    name: "Motorola C115",
    price: 500,
    stock: 50,
  },
];
// "{
//     "name": 'Iphone',
//     "price": 500000,
//     "stock": 50
// }"

// console.log(JSON.stringify(product))

const pathJSON = './products.json';

fs.writeFileSync(pathJSON, JSON.stringify(products));
const info = fs.readFileSync(pathJSON, 'utf-8');
const infojs = JSON.parse(info)
// infojs.map((prod)=>{console.log(prod)})
console.log(infojs);

//! stringify --> para guardar la info --> formato JSON ""
//! parse --> para utilizar la info --> formato javascript
