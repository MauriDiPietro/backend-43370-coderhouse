import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler';
import userRouter from './routes/user.router.js';
import productRouter from './routes/product.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
app.use(errorHandler);

app.use('/users', userRouter);
app.use('/products', productRouter);

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto ${PORT}`);
});