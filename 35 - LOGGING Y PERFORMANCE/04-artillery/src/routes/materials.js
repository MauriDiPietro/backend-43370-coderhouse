import { Router } from 'express';
import { getAll, postMaterial } from '../controllers/materials.js';

const app = Router();

app.get('/', getAll);

app.post('/', postMaterial);

export default app;
