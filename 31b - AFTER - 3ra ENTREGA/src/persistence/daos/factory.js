import ProductDaoFS from "./filesystem/product.dao.js";
import UserDaoFS from "./filesystem/user.dao.js";
/* ------------------------------------ - ----------------------------------- */
import ProductDaoMongo from "./mongodb/product.dao.js";
import UserDaoMongo from "./mongodb/user.dao.js";
import TicketDaoMongo from "./mongodb/ticket.dao.js";
import { initMongoDB } from "./mongodb/connection.js";
/* ------------------------------------ - ----------------------------------- */
import ProductDaoMySql from "./mysql/product.dao.js";
import UserDaoMySql from "./mysql/user.dao.js";
import { initMySqlDB } from "./mysql/connection.js";

let userDao;
let prodDao;
let ticketDao;
let persistence = process.argv[2];
// let persistence = process.env.PERSISTENCE;

switch (persistence) {
  case "file":
    userDao = new UserDaoFS();
    prodDao = new ProductDaoFS();
    console.log(persistence);
    break;
  case "mongo":
    await initMongoDB();
    userDao = new UserDaoMongo();
    prodDao = new ProductDaoMongo();
    ticketDao = new TicketDaoMongo();
    console.log(persistence);
    break;
  case "mysql":
    await initMySqlDB();
    userDao = new UserDaoMySql();
    prodDao = new ProductDaoMySql();
    console.log(persistence);
    break;
  default:
    userDao = new UserDaoFS();
    prodDao = new ProductDaoFS();
    persistence = "file";
    console.log(persistence);
    break;
}

export default { prodDao, userDao, ticketDao };
