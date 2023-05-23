/* ------------------------------- primitivos ------------------------------- */
const variable1 = 'Hola';
const variable2 = 5;
const variable3 = true //false
const variable4 = null;
const variable5 = undefined;

console.log(typeof variable2);

/* --------------------------------- objeto --------------------------------- */

console.log(new Date());
// throw new Error('Error personalizado')

/* -------------------- // definidos por el desarrollador ------------------- */

/* -------------------------------- funciones ------------------------------- */

function Hola(name){
    console.log(`Hola ${name}`);
}

Hola('Juan')

/* --------------------------------- clases --------------------------------- */

class ClaseEjemplo{
    constructor(){}
    saludar(name){
        console.log(`Hola ${name}`);
    }
}

const instanciaClase = new ClaseEjemplo();
instanciaClase.saludar('Carlos');

/* --------------------------------- arrays --------------------------------- */

const array = [ 'Hola', 1, true, undefined ]

console.log(array);

const array2 = [{name: 'JUan', age: 6}, {name: 'Alberto'}]

console.log(array2[0].name);

/* --------------------------- objetos especiales --------------------------- */

console.log(process.cwd());
