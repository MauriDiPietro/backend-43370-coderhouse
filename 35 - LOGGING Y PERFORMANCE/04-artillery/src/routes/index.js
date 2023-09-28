import { Router } from 'express';
import MaterialRouter from './materials.js';

const app = Router();

app.use('/materials', MaterialRouter);

export default app;
