// const http = require('http');
import http from 'http';
import {products} from './products.js'

const server = http.createServer((req, res)=>{
    // res.end('Mi primer servidor con http')
    console.log(req.url);
    if(req.url === '/products'){
        // res.end('ruta products')
        res.end(JSON.stringify(products))
    }
    if(req.url === '/home'){
        res.end('Bienvenido')
    }
})

server.listen(8080, ()=>{
    console.log('Server ok');
})