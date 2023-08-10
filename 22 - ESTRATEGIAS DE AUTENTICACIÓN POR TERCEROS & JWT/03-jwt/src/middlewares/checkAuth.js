import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();
import jwt from "jsonwebtoken";
import { PRIVATE_KEY } from "../jwt/auth.js";

export const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) res.status(401).json({ msg: "Unauthorized" });
    // Bearer +sd6f56+sdf5sd6+f5s+d6f5sd+fsdf+sdf
    console.log(authHeader);
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, PRIVATE_KEY);
    const user = await userDao.getById(decode.userId);
    if (!user) res.status(401).json({ msg: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    next(error.message);
  }
};
