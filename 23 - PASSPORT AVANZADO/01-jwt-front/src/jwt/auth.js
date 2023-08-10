import jwt from "jsonwebtoken";
import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

const PRIVATE_KEY = "1234";

export const generateToken = (user) => {
  const payload = {
    userId: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    age: user.age,
  };

  const token = jwt.sign(payload, PRIVATE_KEY, {
    expiresIn: "20m",
  });
  return token;
};

export const checkAuth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  //si lo queremos manejar desde el backend, seteamos la cookie en el controller con res.cookie(token)
  //despues leemos esa cookie con req.cookie('token')
  //! const token = req.cookies('token') --> // no se realiza el split
  if (!authHeader) return res.status(401).json({ msg: "Unauthorized" });
  try {
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, PRIVATE_KEY);
    console.log("TOKEN DECODIFICADO");
    console.log(decode);
    const user = await userDao.getById(decode.userId);
    if (!user) return res.status(400).json({ msg: "Unauthorized" });
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: "Unauthorized" });
  }
};

