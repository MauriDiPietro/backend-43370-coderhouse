import productRouter from './products.router.js';
import userRouter from './users.router.js';
import cartRouter from './carts.router.js';
import { Router } from "express";
const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/carts', cartRouter);

export default router;

