const users = [
    {
        name: 'Emiliano',
        age: 31,
        series: ['Breaking Bad', 'Game of Thrones']
    },
    {
        name: 'Fernando',
        age: 33,
        series: ['The Crown']
    }    ,
    {
        name: 'Alejandro',
        age: 35,
        series: ['Better Call Saul']
    }
]
// obj1.age = 30


users.forEach(function (user){
    user.age++, user.series.push('Big Bang Theory')
});
    
console.log(users);



