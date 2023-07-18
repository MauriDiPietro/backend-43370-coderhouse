import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";
const prodDao = new ProductDaoMongoDB();

// import ProductDaoFS from "../daos/filesystem/product.dao.js";
// const prodDao = new ProductDaoFS();

export const getAllService = async () => {
    try {
        const response = await prodDao.getAll();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getByIdService = async (id) => {
    try {
        const item = await prodDao.getById(id);
        if(!item) return false;
        else return item;
    } catch (error) {
        console.log(error);
    }
}

export const createService = async (obj) => {
    try {
       const newProd = await prodDao.create(obj);
       if (!newProd) return false;
       else return newProd;
    } catch (error) {
        console.log(error);
    }
}

export const updateService = async (id, obj) => {
    try {
        const item = await prodDao.update(id, obj);
        return item;
    } catch (error) {
        console.log(error);
    }
}

export const deleteService = async (id) => {
    try {
        const item = await prodDao.delete(id);
        return item;
    } catch (error) {
        console.log(error);
    }
}