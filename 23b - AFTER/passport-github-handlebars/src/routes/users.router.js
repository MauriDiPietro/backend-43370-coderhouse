import { Router } from 'express'
import { registerResponse, loginResponse, githubResponse } from '../controllers/user.controller.js';
import passport from 'passport';
import { isAuth } from '../middlewares/isAuth.js';

const router = Router()

router.post('/register', passport.authenticate('register'), registerResponse);

router.post('/login', passport.authenticate('login'), loginResponse);

router.get('/private', isAuth, (req, res) => res.send('route private'));

router.get('/register-github', passport.authenticate('github', { scope: ['user:email'] }));

// router.get('/profile-github', passport.authenticate('github', { scope: ['user:email'] }), githubResponse);

router.get('/profile-github', passport.authenticate('github', {
    failureRedirect: '/login',
    successRedirect: '/profile',
    passReqToCallback: true
}));

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if(err) return res.send(err)
        else res.redirect('/login')
    })
})

export default router
