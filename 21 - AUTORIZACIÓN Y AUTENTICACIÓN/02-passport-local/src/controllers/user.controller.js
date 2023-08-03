import UserDao from "../daos/user.dao.js"
const userDao = new UserDao();

  export const registerResponse = (req, res, next)=>{
    try {
      res.json({
        msg: 'Register ok',
        session: req.session 
      });
    } catch (error) {
      next(error.message)
    }
  }  

  export const loginResponse = async(req, res, next)=>{
    try {
      const user = await userDao.getById(req.session.passport.user);
      res.json({
        msg: 'Login ok',
        user
      })
    } catch (error) {
      next(error.message)
    }
  }  

