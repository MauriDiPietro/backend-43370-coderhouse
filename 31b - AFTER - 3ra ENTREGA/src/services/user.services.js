import Services from "./class.services.js";
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import 'dotenv/config';
import factory from "../persistence/daos/factory.js";
const { userDao, prodDao } = factory;

const SECRET_KEY = process.env.SECRET_KEY_JWT;

export default class UserService extends Services {
  constructor() {
    super(userDao);
  }

  #generateToken(user) {
    const payload = {
      userId: user.id,
    };
    return sign(payload, SECRET_KEY, { expiresIn: '10m' });
  };

  async register(user) {
    try {
      return await userDao.register(user);
    } catch (error) {
      console.log(error);
    }
  };

  async login(user) {
    try {
      const userExist = await userDao.login(user);
      if(userExist) return this.#generateToken(userExist);
      else return false;
    } catch (error) {
      console.log(error);
    }
  };

  async addProdToUserCart(userId, prodId, quantity){
    try {
      const existProd = await prodDao.getById(prodId);
      if(!existProd) return false;
      return userDao.addProdToUserCart(userId, prodId, quantity);
    } catch (error) {
      console.log(error);
    }
  }
}
