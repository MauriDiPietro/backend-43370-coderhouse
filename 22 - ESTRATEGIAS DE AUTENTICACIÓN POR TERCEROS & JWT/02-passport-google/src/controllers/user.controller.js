import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

export const registerResponse = (req, res, next) => {
  try {
    res.json({
      msg: "Register ok",
      session: req.session,
    });
  } catch (error) {
    next(error.message);
  }
};

export const loginResponse = async (req, res, next) => {
  try {
    const user = await userDao.getById(req.session.passport.user);
    res.json({
      msg: "Login ok",
      user,
    });
  } catch (error) {
    next(error.message);
  }
};

export const githubResponse = async (req, res, next) => {
  try {
    // console.log(req.user)
    const { first_name, last_name, email, isGithub } = req.user;
    res.json({
      msg: "Register/Login Github OK",
      session: req.session,
      userData: {
        first_name,
        last_name,
        email,
        isGithub,
      },
    });
  } catch (error) {
    next(error.message);
  }
};

export const googleResponse = async (req, res, next) => {
  try {
    // console.log(req.user)
    const { first_name, last_name, email, isGoogle } = req.user;
    res.json({
      msg: "Register/Login Google OK",
      session: req.session,
      userData: {
        first_name,
        last_name,
        email,
        isGoogle,
      },
    });
  } catch (error) {
    next(error.message);
  }
};
