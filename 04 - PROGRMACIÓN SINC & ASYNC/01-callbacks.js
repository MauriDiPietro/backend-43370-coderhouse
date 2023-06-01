const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a*b;
const division = (a, b) => a/b;

const operaciones = (a, b, callback) => {
    console.log(callback(a, b));
};

operaciones(1, 2, suma);
operaciones(1, 2, resta);
operaciones(1, 2, multiplicacion);
operaciones(1, 2, division);


setTimeout(() => {
    console.log('este mensaje se muestra despues de 3 seg');
}, 3000);