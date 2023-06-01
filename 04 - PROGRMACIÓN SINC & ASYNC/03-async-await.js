const divisionPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('No se puede dividir un nro por 0')
        } else {
            resolve (a/b)
        }
    })
};

const divisionAsync = async(a, b) => {
    try {
        const response = await divisionPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const test = async() =>{
    console.log(await divisionAsync(10, 2));
}

test();

/* ------------------------------------ - ----------------------------------- */

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const error = false;
            if(!error) {
                resolve('Datos recibidos')
            } else {
                reject('Error al obtener datos')
            }
        }, 2000)
    })
}

const obtenerData = async() => {
    try {
        const response = await getData();
        console.log(response);
    } catch (error) {
        console.log('error:', error);
    }
}

obtenerData();

/* ------------------------------------ - ----------------------------------- */

const getDataGitHub = async(username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
            throw new Error('Error al obtener informacion del usuario')
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error:', error.message);
    }
}

getDataGitHub('MauriDiPietro');