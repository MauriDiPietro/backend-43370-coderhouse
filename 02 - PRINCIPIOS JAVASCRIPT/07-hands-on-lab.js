class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable(){
        return this.nombre;
    }

    getCuentaGlobal(){
        return 'Global = ', Contador.contadorGlobal;
    }

    getCuentaIndividual(){
        return `Individual ${this.nombre} = ${this.contador}`;
    }

    contar(){
        Contador.contadorGlobal++;
        this.contador++;
    }
};

const mati = new Contador('Mati');
const nico = new Contador('Nico');

console.log(mati.getResponsable());
console.log(nico.getResponsable());
mati.contar();
console.log(mati.getCuentaIndividual());
console.log(mati.getCuentaGlobal());
console.log('---Nico suma 1---');
nico.contar();
console.log('---Mati vuelve a sumar 1---');
mati.contar();
console.log(mati.getCuentaIndividual());
console.log(nico.getCuentaIndividual());
console.log('Contador global', Contador.contadorGlobal);

