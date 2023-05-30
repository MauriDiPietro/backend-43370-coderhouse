const products =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

const keysNoRepeat = [];
let sum = 0;

products.forEach((prod) => {
    const keys = Object.keys(prod);         //obtenemos las keys | claves
    // console.log('keys-->', keys);        // ['manzanas', 'peras'....]
    const values = Object.values(prod);     //obtenemos los values
    // console.log('values--->', values);   // [1,3,4,5]
    keys.forEach((key)=>{                   //recorremos el array de keys
        if(!keysNoRepeat.includes(key)){    //verificamos si en el array keysNoRepeat no existe la key
            keysNoRepeat.push(key);         //si no existe, la guarda  
        }
    });
    values.forEach((value) => sum += value);    //recorremos el array de values y se lo sumamos a la variable sum
});

console.log(keysNoRepeat);
console.log(sum);

