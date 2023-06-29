import express from 'express';
import { __dirname } from './utils.js';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('websockets')
});

const httpServer = app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});

const socketServer = new Server(httpServer);

const products = [];

socketServer.on('connection', (socket) => {
    console.log(`Usuario conectado: ${socket.id}`);

    socket.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })

    socket.emit('saludoDesdeBack', 'Bienvenido a websocket')

    socket.on('respuestaDesdeFront', (message)=>{
        console.log(message);
    })

    socketServer.emit('arrayProducts', products);
    
    socket.on('newProduct', (obj) =>{
        products.push(obj);
        socketServer.emit('arrayProducts', products);
    })
})