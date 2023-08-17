import Services from "./class.services.js";

// import ProductDaoMongo from "../daos/mongodb/product.dao.js";
// const prodDao = new ProductDaoMongo();

import ProductDaoFS from "../daos/filesystem/product.dao.js";
const prodDao = new ProductDaoFS();

export default class ProductService extends Services {
    constructor() {
        super(prodDao);
    }
};
