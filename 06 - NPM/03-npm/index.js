const moment = require ('moment');

const hoy = moment()
console.log(hoy);
console.log(moment().format('MMMM Do YYYY, h:mm a'));
const fecha_nac = moment('1991-11-10', 'YYYY-MM-DD');

if(fecha_nac.isValid()){
    console.log(`Desde mi nacimiento han pasado ${hoy.diff(fecha_nac, 'days')} días`);
} else {
    console.log('fecha invalida');
}