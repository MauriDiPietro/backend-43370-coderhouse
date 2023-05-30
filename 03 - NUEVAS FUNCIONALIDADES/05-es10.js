/* ----------------------------------- trim ---------------------------------- */
const name1 = '         Jorge    '
const nameTrim = name1.trim();
console.log(name1);
console.log(nameTrim);

/* ---------------------------------- flat ---------------------------------- */

const array = [1,2,3,[3,4], [5,6]];
console.log(array.flat());

const array2 = [1,2,3,[3,4], [5,6], [7, [8, [9]]]];
console.log(array2.flat(3));