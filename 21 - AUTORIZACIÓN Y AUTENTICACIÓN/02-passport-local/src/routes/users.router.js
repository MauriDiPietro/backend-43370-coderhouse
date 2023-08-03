import { Router } from 'express'
import { registerResponse, loginResponse } from '../controllers/user.controller.js';
import passport from 'passport';
import { isAuth } from '../middlewares/isAuth.js';

const router = Router()

router.post('/register', passport.authenticate('register'), registerResponse);

router.post('/login', passport.authenticate('login'), loginResponse);

router.get('/private', isAuth, (req, res) => res.send('route private'));


export default router
