import Services from "./class.services.js";
import factory from '../persistence/daos/factory.js';
const { userDao } = factory;

export default class UserService extends Services {
  constructor(){
    super(userDao)
  }

  register = async (user) => {
    try {
      const token = await userDao.register(user);
      return token;
    } catch (error) {
      console.log(error);
    }
  };

  login = async (user) => {
    try {
      const userExist = await userDao.login(user);
      return userExist;
    } catch (error) {
      console.log(error);
    }
  };
}

