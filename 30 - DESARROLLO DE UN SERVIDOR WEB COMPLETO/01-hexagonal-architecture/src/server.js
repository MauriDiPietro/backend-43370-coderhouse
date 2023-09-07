import express from 'express';
import morgan from 'morgan';
import apiRouter from './web/routes/index.js';
import { errorHandler } from './lib/errorHandler.js';
import { initMongoDB } from './lib/dbConnection.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use(errorHandler);

const PORT = config.PORT || 8080;

await initMongoDB();

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));