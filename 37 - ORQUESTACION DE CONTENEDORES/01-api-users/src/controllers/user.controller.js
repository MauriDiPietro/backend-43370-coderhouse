import * as userService from "../services/user.service.js";

export const createUser = async (req, res) => {
  const { cant } = req.query;
  try {
    const response = await userService.createUsersMock(cant);
    res.status(200).json({ users: response });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const response = await userService.getUsers();
    res.status(200).json({ users: response, pid: process.pid });

  } catch (error) {
    console.log(error);
  }
};


