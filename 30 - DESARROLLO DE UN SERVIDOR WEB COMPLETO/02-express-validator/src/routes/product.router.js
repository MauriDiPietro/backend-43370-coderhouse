import { Router } from 'express';
import ProductController from '../controllers/product.controllers.js';
import { validateProduct } from '../validators/product.validator.js';
const controller = new ProductController();

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', validateProduct, controller.getById);

router.post('/', controller.createProd);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

export default router;




