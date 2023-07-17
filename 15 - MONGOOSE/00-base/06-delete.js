import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const test = async() => {
    await initMongoDB();
    const delete1 = await UserModel.findByIdAndDelete(
        '64af47ed5523b83fdeb51f25'
        )
    console.log(delete1);

}

test()