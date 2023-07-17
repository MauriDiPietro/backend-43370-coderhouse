import { Router } from "express";
import { getAllProducts, getProductById, createProduct } from "../controllers/product.controllers.js";
const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);

export default router;