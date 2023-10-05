import Controllers from "./class.controller.js";
import UserService from "../services/user.services.js";
const userService = new UserService()
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();

export default class UserController extends Controllers{
  constructor(){
    super(userService)
  }

  register = async (req, res, next) => {
    try {
      const newUser = await this.service.register(req.body);
      return httpResponse.Ok(res, newUser);
    } catch (error) {
      next(error)
    }
  };

  login = async (req, res, next) => {
    try {
      const userExist = await this.service.login(req.body);
      return httpResponse.Ok(res, userExist);
    } catch (error) {
      next(error)
    }
  };

  profile = (req, res, next)=>{
    try {
      const { first_name, last_name, email, role } = req.user;
      return httpResponse.Ok(res, 
        {
          first_name, 
          last_name, 
          email, 
          role
        }
      )
    } catch (error) {
      next(error);
    }
  }

  async resetPass(req, res, next){
    try {
      const user = req.user;
      const tokenResetPass = await userService.resetPass(user);
      if(!tokenResetPass) return httpResponse.NotFound(res, 'Email not send')
      res.cookie('tokenpass', tokenResetPass)
      return httpResponse.Ok(res, {msg: 'Email reset password send OK'})
    } catch (error) {
      next(error.message)
    }
  }

  async updatePass(req, res, next){
    try {
      const user = req.user;
      const { pass } = req.body;
      // console.log(req.cookies);
      const { tokenpass } = req.cookies;
      if(!tokenpass) return httpResponse.Forbidden(res, 'Token expired');
      const updPass = await userService.updatePass(user, pass);
      if(!updPass) return httpResponse.NotFound(res, 'Password not found');
      res.clearCookie('tokenpass');
      return httpResponse.Ok(res, updPass);
    } catch (error) {
      next(error.message);
    }
  }

}

