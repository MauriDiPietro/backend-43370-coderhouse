import Controllers from "./class.controller.js";
import UserService from "../services/user.services.js";
const userService = new UserService();

export default class UserController extends Controllers {
  constructor() {
    super(userService);
  }

  register = async (req, res, next) => {
    try {
    } catch (error) {
      next(error.message);
    }
  };

  login = async (req, res, next) => {
    try {
    } catch (error) {
      next(error.message);
    }
  };

  profile = (req, res, next) => {
    try {
    } catch (error) {
      next(error.message);
    }
  };
}
