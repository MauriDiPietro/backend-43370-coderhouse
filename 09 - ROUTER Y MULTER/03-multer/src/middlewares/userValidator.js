// --> request --> MIDDLEWARE ---> ENDPOINT
export const userValidator = (req, res, next) => {
    const user = req.body;
    if(user.role === 'admin') next();
    else res.status(401).send('No estas habilitado')
}

