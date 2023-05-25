/* ----------------------------- funcion basica ----------------------------- */
function saludar1(name) {
    return `Hola ${name}`
};

/* ----------------------------- arrow function ----------------------------- */
const saludar2 = (name) => {
    return `Hola ${name}`
};

const saludar3 = name => `Hola ${name}`

console.log(saludar1('Carlos'));
console.log(saludar2('Martin'));
console.log(saludar3('Roman'));

/* -------------------------------- callback -------------------------------- */
const array = [ 1, 2, 3, 4, 5, 6 ];

// const array2 = array.filter(function(x){
//      x > 1
//     }
// )

const array2 = array.filter(x => x > 1);

console.log(array2);

