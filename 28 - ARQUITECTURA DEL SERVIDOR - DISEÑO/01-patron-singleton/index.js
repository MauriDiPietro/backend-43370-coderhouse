import mongoose from "mongoose";

class ConnectMongoDB {
    static #instance
    constructor(){
        mongoose.connect('mongodb://localhost:27017/coderhouse')
    }

    static getInstance(){
        if(this.#instance) {
            console.log('Ya está generada la instancia!');
            return this.#instance;
        } else {
            this.#instance = new ConnectMongoDB();
            console.log('Conectado a MongoDB!');
            return this.#instance;
        }
    }
}

const conn1 = ConnectMongoDB.getInstance();
const conn2 = ConnectMongoDB.getInstance();
const conn3 = ConnectMongoDB.getInstance();