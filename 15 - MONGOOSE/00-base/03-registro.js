import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const user = {
    first_name: 'Matias',
    last_name: 'Merlo',
    age: 37
}

const createUser = async (obj) =>{
    await UserModel.create(obj);
}

const test = async() => {
    await initMongoDB();
    await createUser(user);
    console.log('usuario creado!');
}

test()