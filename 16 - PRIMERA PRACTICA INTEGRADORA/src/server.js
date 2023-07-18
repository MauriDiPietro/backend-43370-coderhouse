import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import morgan from 'morgan';
import './daos/mongodb/connection.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);
app.use(morgan('dev'));

app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});