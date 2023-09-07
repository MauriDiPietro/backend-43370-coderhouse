import { Router } from 'express';
import ProductController from '../controllers/product.controllers.js';
const controller = new ProductController();

const router = Router();

router 
      .get('/', controller.getAll)
      .get('/dto/:id', controller.getByIdDTO)
      .get('/no-dto/:id', controller.getById)
      .post('/dto', controller.createProdDTO)
      .post('/', controller.create)
      .put('/:id', controller.update)
      .delete('/:id', controller.delete)  

export default router;




