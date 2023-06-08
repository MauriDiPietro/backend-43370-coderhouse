const obj = {};

for (let i = 0; i <= 10000; i++) {
    const nro = Math.floor(Math.random() * 20) + 1;
    if(!obj[nro]){
        obj[nro] = 1
    } else {
        obj[nro]++
    }
    
}

console.log(obj);