import ProductDaoMongo from '../daos/mongodb/product.dao.js'
import UserDaoMongo from "../daos/mongodb/user.dao.js";
import ProductDaoFS from "../daos/filesystem/product.dao.js";
import UserDaoFS from "../daos/filesystem/user.dao.js";
import { initMongoDB } from './mongodb/connection.js';

let userDao;
let prodDao;
let persistence = process.argv[2];
// let persistence = process.env.PERSISTENCE;

switch (persistence) {
    case 'file':
        userDao = new UserDaoFS();
        prodDao = new ProductDaoFS();
        console.log(persistence);
        break;
    case 'mongo':
        await initMongoDB();
        userDao = new UserDaoMongo();
        prodDao = new ProductDaoMongo();
        console.log(persistence);
        break;
    default:  
        userDao = new UserDaoFS();
        prodDao = new ProductDaoFS();
        persistence = 'file'
        console.log(persistence);
        break; 
};

export default { prodDao, userDao };