import { createHash, isValidPassword } from "../utils.js";
import { UserModel } from "./models/user.model.js";

export default class UserDao {
    async registerUser(user) {
        try {
            const { email, password } = user;
            const existUser = await UserModel.findOne({ email });
            console.log('existUser::', existUser);
            if(!existUser) {
                if(email === 'adminCoder@coder.com' && password === 'adminCod3r123'){
                    return await UserModel.create({
                        ...user, 
                        password: createHash(password),
                        role: 'admin'
                    });
                }
                return await UserModel.create({
                    ...user,
                    password: createHash(password)
                });
            } else return false;
        } catch (error) {
            console.log(error);
        }
    };

    async loginUser(user) {
        try {
            const { email, password } = user;
            const userExist = await UserModel.findOne({ email });
            if(userExist) {
                const passValid = isValidPassword(password, userExist);
                console.log(passValid);
                if(!passValid) return false;
                else return userExist;
                // !passValid ? false : userExist
            }
            else return false;
        } catch (error) {
            console.log(error);
        }
    };
}