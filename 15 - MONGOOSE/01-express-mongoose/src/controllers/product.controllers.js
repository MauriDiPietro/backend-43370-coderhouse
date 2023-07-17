import ProductManager from "../managers/product.manager.js";
const prodManager = new ProductManager();

export const getAllProducts = async (req, res, next) =>{
    try {
        const response = await prodManager.getAll();
        res.json(response);
    } catch (error) {
        next(error);
    }
}

export const getProductById = async(req,res,next) => {
    try {
        const { id } = req.params
        const response = await prodManager.getById(id);
        if(!response) throw new Error('item not found!')
        res.json(response)
    } catch (error) {
        next(error);
    }
}

export const createProduct = async (req,res,next) => {
    try {
        const newProd = await prodManager.create(req.body);
        res.json(newProd);
    } catch (error) {
        next(error);
    }
}