import express from 'express'
import morgan from 'morgan'
import { errorHandler } from './middlewares/errorHandler.js';
import config from './config/config.js';
import './db/db.js';
import postRouter from './routes/posts.routes.js';

const PORT = config.PORT;

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(errorHandler);

app.use('/posts', postRouter);

app.listen(PORT, ()=>{
    console.log(`Server OK on port: ${PORT}`)
})