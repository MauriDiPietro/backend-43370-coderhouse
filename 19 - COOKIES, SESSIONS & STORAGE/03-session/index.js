import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json());

const sessionConfig = {
    secret: 'secret',
    cookie: { maxAge: 10000 },
    saveUninitialized: true,
    resave: false
};

app.use(session(sessionConfig));

const users = [
    {
        username: 'juan',
        password: 1234,
        admin: true
    },
    {
        username: 'jose',
        password: 1234,
        admin: false
    }
];

app.post('/login', (req, res)=> {
    const { username, password } = req.body;
    const index = users.findIndex((user) => user.username === username && user.password === password);
    if(index < 0) res.json({ msg: 'Unauthorized' })
    else{ 
        const user = users[index];
        req.session.info = {
            loggedIn: true,
            count: 1,
            admin: user.admin
        }
        res.json({ msg: `Bienvenido ${user.username}` })
    }
});

const validateLogin = (req, res, next) => {
    if (req.session.info.loggedIn) next();
    else res.json({ msg: 'Unauthorized' })
};

const isAdmin = (req, res, next) => {
    if (req.session.info.admin) next();
    else res.json({ msg: 'Unauthorized' })
};

app.get('/secret-endpoint', validateLogin, (req, res) => {
    req.session.info.count++;
    res.json({
        msg: 'endpoint secreto',
        session: req.session
    })
});

app.get('/admin-secret-endpoint', validateLogin, isAdmin, (req, res) => {
    req.session.info.count++;
    res.json({
        msg: 'endpoint secreto SOLO ADMINS',
        session: req.session
    })
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ msg: 'session destroy' })
})

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});