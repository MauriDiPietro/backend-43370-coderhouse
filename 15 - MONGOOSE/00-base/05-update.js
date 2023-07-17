import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const test = async() => {
    await initMongoDB();
    const update1 = await UserModel.findByIdAndUpdate(
        '64af47ed5523b83fdeb51f25',
        { admin: true },
        { new: true }
        )
    console.log(update1);

}

test()