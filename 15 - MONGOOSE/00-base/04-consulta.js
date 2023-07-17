import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const test = async() => {
    await initMongoDB();
    // const consulta1 = await UserModel.find({}).limit(1)
    // console.log(consulta1);
    // const consulta1 = await UserModel.find({ age: { $lt: 40 }})
    // console.log(consulta1);
    const findByIdMethod = await UserModel.findById('6466b1de59553c6548dedb54')
    console.log(findByIdMethod);
}

test()