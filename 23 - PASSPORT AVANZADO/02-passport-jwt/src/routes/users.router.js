import { Router } from 'express'
import { register, login } from '../controllers/user.controller.js';
import passport from 'passport';

const router = Router()

router.post('/register', register);

router.post('/login', login);

router.get('/private', passport.authenticate('jwt'), (req, res) => res.send(req.user));

router.get('/private-cookies', passport.authenticate('jwtCookies'), (req, res) => res.send(req.user));

export default router;
