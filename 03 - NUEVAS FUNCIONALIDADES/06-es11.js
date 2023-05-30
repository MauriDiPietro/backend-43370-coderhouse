/* --------------------------------- nullish -------------------------------- */
// falsey value
// 0, null, undefined, false, NaN, ""

let altura = 0;

console.log('Altura', altura || 100);   //OPERADOR OR

console.log('Altura', altura ?? 100);   //OPERADOR NULLISH

/* --------------------------- variables privadas --------------------------- */

class Person {
    #fullname;
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.#fullname = `${this.firstname} ${this.lastname}`;
    }

    getFullName(){
        return this.#fullname;
    };

    #methodPrivate(){
        return 'soy un metodo privado'
    };

    getMethoPriv(){
        return this.#methodPrivate();
    }
}

const instance = new Person('Juan', 'Perez');
console.log(instance.getFullName());
// console.log(instance.#methodPrivate())
console.log(instance.getMethoPriv());
// Person.#fullname