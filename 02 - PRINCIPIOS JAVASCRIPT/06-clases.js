class Persona {
    constructor(name) {
        this.name = name;
    }

    static value = 'variable estatica';

    getName(){
        return this.name;
    }
}

const instance1 = new Persona('Juan');

console.log(instance1.getName());
console.log(Persona.value);