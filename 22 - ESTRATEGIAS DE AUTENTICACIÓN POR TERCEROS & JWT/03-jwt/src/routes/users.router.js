import { Router } from 'express'
import { register, login, privateEndpoint } from '../controllers/user.controller.js';
import { checkAuth } from '../middlewares/checkAuth.js';

const router = Router()

router.post('/register', register);

router.post('/login', login);

router.get('/private', checkAuth, privateEndpoint);


export default router;
