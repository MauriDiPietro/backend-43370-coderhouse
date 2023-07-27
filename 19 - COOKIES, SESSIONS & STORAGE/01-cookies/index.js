import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const mySecretKey = '1234';

app.use(cookieParser(mySecretKey));

app.get('/set-cookie', (req, res) => {
    res.cookie('idioma', 'español'
    // , { maxAge: 3000 }
    ).send('ok')
});

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies)
    const { idioma } = req.cookies;
    idioma === 'ingles' ? res.send('hello!') : res.send('Hola!')
});

app.get('/set-signed-cookie', (req, res) => {
    res.cookie('name', 'juan', 
    { signed: true } 
    // ,{ maxAge: 3000 }
    ).send('ok')
});

app.get('/get-cookies', (req, res) => {
    res.json({
        cookies: req.cookies,
        signedCookies: req.signedCookies
    })
});

app.get('/clear', (req, res)=> {
    const cookies = req.cookies;
    // console.log(cookies);
    const keys = Object.keys(cookies);
    keys.forEach((key) => res.clearCookie(key));
    res.send('cookies clear')
    // res.clearCookie('idioma').send('clear cookie');
})

app.listen(8080, ()=>{
    console.log('server ok');
});