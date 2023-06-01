const divisionPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('No se puede dividir un nro por 0')
        } else {
            resolve (a/b)
        }
    })
};

divisionPromesa(1, 2)
    .then((resultado) => {
        console.log('entró al .then');
        console.log(resultado);
        return resultado;
    })
    .catch((error) => {
        console.log('entró al .catch');
        console.log(error)
    })

