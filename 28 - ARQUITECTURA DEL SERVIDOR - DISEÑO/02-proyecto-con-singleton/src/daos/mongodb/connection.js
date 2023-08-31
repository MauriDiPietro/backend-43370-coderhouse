import { connect } from "mongoose";
import 'dotenv/config';

export class ConnectMongoDB {
    static #instance
    constructor(){
        connect(process.env.MONGO_LOCAL_URL)
    }

    static getInstance(){
        if(this.#instance) {
            console.log('Ya existe la conexión a MongoDB!');
            return this.#instance;
        } else {
            this.#instance = new ConnectMongoDB();
            console.log('Conectado a MongoDB!');
            return this.#instance;
        }
    }
}


/*
export const initMongoDB = async() => {
  try {
    await connect(
      process.env.MONGO_LOCAL_URL
    );
    console.log("Conectado a la base de datos de MongoDB");
  } catch (error) {
    console.log(error);
  }
}
*/




