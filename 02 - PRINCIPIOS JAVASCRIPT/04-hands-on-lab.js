/* -------------------------------- OPCION 1 -------------------------------- */

const showList = (array) => {
    if(Array.isArray(array)) {
        if(array.length === 0) {
            return 'List empty'
        } else {
            // for(const item of array) {       //! OPCION 1
            //     console.log(item);
            // }
            console.log(`${array.length}`);
            return array.map((item) => (item)); //! OPCION 2
        }
    } else {
        return 'Is not array'
    }
};

/* ------------------------------------ OPCION 2 ----------------------------------- */

const showList2 = (array) => {
    if(Array.isArray(array)){
        if(array.length === 0) 'List empty'
        else return array.map((item) => (item));
        console.log(`${array.length}`);
    } else {
        return 'Is not array'
    }
}

/* ------------------------------------ test ----------------------------------- */

const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const arrayEmpty = [];

console.log(showList(array1));
// console.log(showList(arrayEmpty));
// console.log(showList('Hola'));