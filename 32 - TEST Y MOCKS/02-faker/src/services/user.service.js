import { UserModel } from '../models/user.model.js';
import {generateUser} from '../utils/user.utils.js';

export const createUsersMock = async (cant = 50) => {
  try {
    const users = [];
    for (let i = 0; i < cant; i++) {
      const user = generateUser();
      users.push(user);
    }
    return await UserModel.create(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async() => {
  try {
    return await UserModel.find({});
  } catch (error) {
    console.log(error);
  }
};

