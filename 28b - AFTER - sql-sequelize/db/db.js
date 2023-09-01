import { Sequelize } from "sequelize";
import config from "../config/config.js";

export const db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    host: config.DB_HOST,
    dialect: 'mysql'
});

db.sync({ force:false })
    .then(()=>console.log('Conexion a la base de datos ok!'))
    .catch(err=>console.log(err))