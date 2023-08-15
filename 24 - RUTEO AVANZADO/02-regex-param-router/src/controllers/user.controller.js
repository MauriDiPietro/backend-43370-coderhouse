import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();
import { generateToken } from "../jwt/auth.js";

export const register = async(req, res, next)=>{
    try {
        const { first_name, last_name, email, age, password } = req.body;
        const exist = await userDao.getByEmail(email);
        if(exist) return res.status(400).json({ msg: 'User already exists' });
        const user = {first_name, last_name, email, age, password}
        const newUser = await userDao.createUser(user);
        const token = generateToken(newUser);
        res.json({
            msg: 'Register OK',
            token
        })
    } catch (error) {
        next(error);
    }
};

export const login = async(req, res, next)=>{
    try {
       const { email, password } = req.body;
       const user = await userDao.loginUser({email, password});
       if(!user){
        res.json({msg: 'invalid credentials'});
       }
       const access_token = generateToken(user)
       res.header('Authorization', access_token).json({msg: 'Login OK', access_token})
    } catch (error) {
        next(error);
    }
}

export const profileUser = async(req, res)=>{
    const { first_name, last_name, email, role } = req.user;
    res.json({
      status: 'success',
      userData: {
        first_name, 
        last_name, 
        email, 
        role
      }
    })
  }

