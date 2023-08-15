import { Router } from 'express'; 
import { register, login, profileUser } from '../controllers/user.controller.js';
import { checkAuth } from '../jwt/auth.js';

const router = Router()

router.post('/register', register);

router.post('/login', login);

router.get('/private', checkAuth, profileUser);

router.get('/:email', (req, res) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const { email } = req.params;
    if ( email.match( emailRegex ) ) {
        // userDao.getByEmail(email)
        res.send({
            msg: 'email válido',
            email
        })
    } else res.status(400).send('email inválido')
});

router.get('/express/:email([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$)', (req, res) => {
    const { email } = req.params;
        // userDao.getByEmail(email)
        res.send({
            msg: 'email válido',
            email
        });
});

router.get('/name/:name([a-zA-Z]+)', (req, res) => {
    const { name } = req.params;
        // userDao.getByname(name)
        res.send({
            msg: 'name válido',
            name
        });
});

router.get('/email/:email2', (req, res) =>{
    // userDao.getByEmail(email)
    res.send({
        msg: 'email válido'
    });
});

router.param('email2', (req, res, next, email2) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const isValid = email2.match( emailRegex );
    if ( isValid ) next();
    else res.status(400).send('email inválido')
})

router.get('*', (req, res)=>{
    res.send({
        msg: 'Ruta inexistente'
    })
});


export default router;
