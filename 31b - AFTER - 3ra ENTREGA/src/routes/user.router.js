import { Router } from 'express';
import UserController from '../controllers/user.controllers.js';
import { checkAuth } from '../middlewares/authJwt.js';
const controller = new UserController();

const router = Router();

router
        .post('/register', controller.register)
        .post('/login', controller.login)
        .get('/profile', checkAuth, controller.profile)
        .post('/add/:idProd/quantity/:quantity', checkAuth, controller.addProdToUserCart)

export default router;

