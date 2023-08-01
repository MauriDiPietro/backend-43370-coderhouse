const users = [
    {
      username: 'juan',
      password : '1234',
      admin: true,
    },
    {
      username: 'jose',
      password : '1234',
      admin: false,
    }
];

export const login = (req, res) => {
    const { username, password } = req.body;
    const index = users.findIndex((user) => user.username === username && user.password === password);
    if(index < 0) res.json({ msg: 'Unauthorized' });
    else{ 
        const user = users[index];
        req.session.info = {
            loggedIn: true,
            count: 1,
            username: user.username,
            admin: user.admin
        }
        res.json({ msg: `Bienvenido ${user.username}` })
    }
}

export const visit = (req, res) => {
    req.session.info.count++;
    res.json({
        msg: `${req.session.info.username} visitó el sitio ${req.session.info.count} veces`
    })
};

export const logout = (req, res) => {
    req.session.destroy((err) => {
        if(!err) res.json({ msg: 'Logout ok!' });
        else res.json({ msg: err });
    })
};

export const infoSession = (req, res) => {
    res.json({
        session: req.session,
        sessionId: req.sessionID,
        cookies: req.cookies
    });
};