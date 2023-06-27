import express from 'express';
import morgan from 'morgan';
import handlebars from 'express-handlebars';
import { errorHandler } from './middlewares/errorHandler.js';
import userRouter from './routes/user.router.js';
import productRouter from './routes/product.router.js';
import viewsRouter from './routes/views.router.js';
import { __dirname } from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(errorHandler);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');


app.use('/', viewsRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto ${PORT}`);
});