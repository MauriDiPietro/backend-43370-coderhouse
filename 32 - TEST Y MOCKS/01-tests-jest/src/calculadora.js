class Cal {
    chequearValores(num1, num2){
        const ver1 = isNaN(num1)
        const ver2 = isNaN(num2)
        if(ver1 || ver2) return true
        else return false
    }

    suma(num1, num2){
        if(this.chequearValores(num1, num2)){

            throw new Error('Argumentos invalidos')
        }
        return num1+num2
    }

    resta(num1, num2){
        if(this.chequearValores(num1, num2)){
            throw new Error('Argumentos invalidos')
        }
        return num1-num2
    }
};

const calculadora = new Cal();

export default calculadora;