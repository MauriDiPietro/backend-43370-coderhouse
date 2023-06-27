import { Router } from "express";
const router = Router();

router.get('/vista1', (req, res) => {
    res.render('vista1')
});

router.get('/vista2', (req, res) => {
    res.render('vista2')
});

router.get('/vista3', (req, res) => {
    const user = {
        name: 'Emiliano',
        firstname: 'Pellegrino'
    }
    res.render('vista3', {user})
});

const users = [
    {
        firstname: 'Emiliano',
        lastname: 'Pellegrino',
        age: 30,
        mail: 'juan@mail.com'
    },
    {
        firstname: 'Santiago',
        lastname: 'Maza',
        age: 45,
        mail: 'santi@mail.com'
    },
    {
        firstname: 'MAtias',
        lastname: 'Merlo',
        age: 52,
        mail: 'mati@mail.com'
    },
    {
        firstname: 'Ramiro',
        lastname: 'Schulmeister',
        age: 30,
        mail: 'rami@mail.com'
    }
]

router.get('/actividad', (req, res) => {
    const random = Math.floor(Math.random() * 4);
    const user = users[random];
    res.render('actividad', {user})
});

router.get('/lista', (req, res) => {
    res.render('lista', {users})
});

export default router