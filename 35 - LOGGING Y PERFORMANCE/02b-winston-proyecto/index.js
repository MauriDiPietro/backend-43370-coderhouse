import express from 'express';
import { logger } from './utils/logger.js';

const app = express();

app.get('/', (req, res)=>{
    logger.error('error en el endpoint de prueba')
    res.send('probando logger')
})

app.listen(8080,()=>logger.info('server ok'))