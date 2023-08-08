// npm i passport-github2
import { Strategy as GithubStrategy } from 'passport-github2';
import passport from 'passport';
import UserDao from '../daos/user.dao.js';
const userDao = new UserDao();

const strategyOptions = {
    clientID: 'Iv1.3c4696932577965e',
    clientSecret: '24d21d0a9d0c6c15880a55cc0ba3a6be18246129',
    callbackURL: 'http://localhost:8080/users/profile-github',
};

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
    // console.log('PROFILE --> ', profile);
    const email = profile._json.email !== null ? profile._json.email : profile_json.blog;
    const user = await userDao.getByEmail( email );
    if ( user ) return done( null, user );
    const newUser = await userDao.register({
        first_name: profile._json.name.split(' ')[0],
        last_name: profile._json.name.split(' ')[1],
        email,
        password: '',
        isGithub: true
    });
    return done(null, newUser);
}

passport.use('github', new GithubStrategy(strategyOptions, registerOrLogin));