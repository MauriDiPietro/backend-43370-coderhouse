/* ------------------------------- exponencial ------------------------------ */

const expMath = Math.pow(2, 3); //2*2*2
const expES7 = 2 ** 3

console.log(expMath)
console.log(expES7);  

/* -------------------------------- includes -------------------------------- */

const arrayTest = [ 1, 2, 3, 4, 5, 6 ];
console.log(arrayTest.includes(6));

const arrayUsers = [ 'juan', 'pedro', 'alberto' ];

const test1 = (array) =>{
    if(array.includes('pedro')) return 'acceso permitido'
    return 'acceso denegado'
}

const test2 = (array) =>{
    return array.includes('pedro') ? 'acceso permitido' : 'acceso denegado'
}

console.log(test2(arrayUsers));

/* ---------------------------------- some (ES6) ---------------------------------- */

const persons = [
    {
        name: 'Juan',
        age: 28
    },
    {
        name: 'Jose',
        age: 35
    },
    {
        name: 'Ignacio',
        age: 40
    }
];
let ageSearch = 35
let exists = persons.some((person)=>{
    return person.age === ageSearch;
});

if(exists) {
    console.log(`Existe una persona con la edad de ${ageSearch} en el array`);
} else {
    console.log(`No existe ninguna persona con la edad de ${ageSearch} en el array`);
}
