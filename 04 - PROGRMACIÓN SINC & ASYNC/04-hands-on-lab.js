const divisionPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('No se puede dividir un nro por 0')
        } else {
            resolve (a/b)
        }
    })
};

const sumaPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a === 0 || b === 0){
            reject('Suma: Operación innecesaria')
        } else {
            resolve (a+b)
        }
    })
};

const restaPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a === 0 || b === 0){
            reject('resta: Operación innecesaria')
        } else if (a - b < 0){
            reject('resta: la calculadora solo devuelve valores positivos')
        } else {
            resolve (a-b)
        }
    })
};

const multPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a < 0 || b < 0){
            reject('multiplicacion: la calculadora solo devuelve valores positivos')
        } else {
            resolve (a*b)
        }
    })
};

/* ------------------------------------ - ----------------------------------- */

const divisionAsync = async(a, b) => {
    try {
        const response = await divisionPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const sumaAsync = async(a, b) => {
    try {
        const response = await sumaPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const restaAsync = async(a, b) => {
    try {
        const response = await restaPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const multAsync = async(a, b) => {
    try {
        const response = await multPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const test = async() => {
    console.log(await sumaAsync(7, 7));
    console.log(await restaAsync(10, 7));
    console.log(await multAsync(7, 7));
}

test();