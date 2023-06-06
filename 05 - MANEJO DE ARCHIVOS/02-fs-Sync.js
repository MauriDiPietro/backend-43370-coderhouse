const fs = require('fs');

const path = './file1.txt';

if(fs.existsSync(path)){
    const info = fs.readFileSync(path, 'utf-8');
    console.log(info); 
    fs.appendFileSync(path, ' segundo texto');
} else {
    fs.writeFileSync(path, 'Primer texto')
}

// fs.unlinkSync(path)