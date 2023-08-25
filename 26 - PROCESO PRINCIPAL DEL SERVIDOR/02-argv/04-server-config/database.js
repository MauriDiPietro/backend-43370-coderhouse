import mongoose from "mongoose";
import config from "./config.js";

let MONGO_URL = "";

switch (config.NODE_ENV) {
    case 'dev':
        MONGO_URL = config.MONGO_LOCAL_URL
        console.log('db local');
        break;
    case 'prod':
        MONGO_URL = config.MONGO_ATLAS_URL
        console.log('db prod');
        break;
    case 'test':
        MONGO_URL = config.MONGO_QA_URL
        console.log('db test');
        break
    default:
        MONGO_URL = config.MONGO_LOCAL_URL
        console.log('db local');
        break;
}

try {
  await mongoose.connect(MONGO_URL);
  console.log("Conectado a la base de datos de MongoDB");
} catch (error) {
  console.log(`ERROR => ${error}`);
}
