import { Router } from "express";
const router = Router();
import { 
    createProduct,
    getProductById,
    getProducts,
    deleteProduct,
    updateProduct 
} from "../managers/product.manager.js";

router.get('/', async(req, res) => {
    try {
        
    } catch (error) {
        next(error);
    }
});

router.get('/:idProduct', async(req, res) => {
    try {
        
    } catch (error) {
        next(error);
    }
});

router.post('/', async(req, res) => {
    try {
        
    } catch (error) {
        next(error);
    }
});

router.put('/', async(req, res) => {
    try {
        
    } catch (error) {
        next(error);
    }
});

router.delete('/', async(req, res) => {
    try {
        
    } catch (error) {
        next(error);
    }
});

export default router