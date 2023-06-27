import fs from "fs";
import {__dirname} from '../utils.js';
const pathFile = __dirname + '/db/users.json';

export const createUser = async(obj) => {
    try {
      const user = {
        id: (await getMaxId()) + 1,
        ...obj,
      };
      const usersFile = await getUsers();
      usersFile.push(user);
      await fs.promises.writeFile(pathFile, JSON.stringify(usersFile));
      return user;
    } catch (error) {
      console.log(error);
    }
  }

export const getMaxId = async () => {
    let maxId = 0;
    const users = await getUsers();
    users.map((user) => {
      if (user.id > maxId) maxId = user.id;
    });
    return maxId;
}

export const getUsers = async()=> {
    try {
      if (fs.existsSync(pathFile)) {
        const users = await fs.promises.readFile(pathFile, "utf-8");
        const usersJS = JSON.parse(users);
        return usersJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

export const getUserById = async(id)=> {
    try {
      const usersFile = await getUsers();
      const user = usersFile.find((u) => u.id === id);
      if (user) return user;
      else return false;
      //    user ? user : false
    } catch (error) {
      console.log(error);
    }
  }

export const updateUser = async(obj, id)=> {
    try {
      const usersFile = await getUsers();
      const index = usersFile.findIndex((user) => user.id === id);
      if (index === -1) {
        throw new Error("id not found");
      } else {
        usersFile[index] = { ...obj, id };
      }
      await fs.promises.writeFile(pathFile, JSON.stringify(usersFile));
    } catch (error) {
      console.log(error);
    }
}

export const deleteUser = async(id) => {
    try {
      const usersFile = await getUsers();
      if (usersFile.length > 0) {
        const newArray = usersFile.filter((user) => user.id !== id);
        await fs.promises.writeFile(pathFile, JSON.stringify(newArray));
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.log(error);
    }
}

