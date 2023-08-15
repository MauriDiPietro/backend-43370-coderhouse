import Router from './class.customRouter.js'; 
import { register, login, profileUser } from '../controllers/user.controller.js';
import { checkAuth } from '../jwt/auth.js';

export default class UserCustomRouter extends Router {
    init(){
        this.post('/register', register);
        this.post('/login', login);
        this.get('/private', checkAuth, profileUser);
        this.get('/admin', ['ADMIN'], (req, res)=> res.send('route admin'));
        this.get('/public', ['PUBLIC'], (req, res)=> res.send('route public'));
    }
}




