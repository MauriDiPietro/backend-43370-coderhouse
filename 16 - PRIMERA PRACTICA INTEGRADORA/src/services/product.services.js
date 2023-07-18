import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";
const prodDao = new ProductDaoMongoDB();

// import { __dirname } from "../utils.js";
// import ProductDaoFS from "../daos/filesystem/product.dao.js";
// const prodDao = new ProductDaoFS(__dirname+'/daos/filesystem/products.json');

export const getAll = async () => {
    try {
        const response = await prodDao.getAll();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getById = async (id) => {
    try {
        const item = await prodDao.getById(id);
        if(!item) return false;
        else return item;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (obj) => {
    try {
       const newProd = await prodDao.create(obj);
       if (!newProd) return false;
       else return newProd;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (id, obj) => {
    try {
        const item = await prodDao.update(id, obj);
        return item;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        const item = await prodDao.delete(id);
        return item;
    } catch (error) {
        console.log(error);
    }
}