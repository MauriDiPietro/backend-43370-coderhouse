const value = 8;

function example() {
    let data = [ 1,2,3,4,5,6,7,8,9,10,11,12 ];
    return data.filter(item => item > value);
}

console.log(example());

