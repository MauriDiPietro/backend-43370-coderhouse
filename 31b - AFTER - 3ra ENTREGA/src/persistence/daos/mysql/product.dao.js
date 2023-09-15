import MySQLDao from "./mysql.dao.js";
import { ProductModel } from "./models/product.model.js";

export default class ProductDaoMySql extends MySQLDao {
    constructor(){
        super(ProductModel)
    }
};

