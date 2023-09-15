import { Router } from 'express';
import ProductController from '../controllers/product.controllers.js';
import { checkAdmin } from '../middlewares/checkAdmin.js';
const controller = new ProductController();

const router = Router();

router 
      .get('/', controller.getAll)
      .get('/dto/:id', controller.getByIdDTO)
      .get('/no-dto/:id', controller.getById)
      .post('/dto', controller.createProdDTO)
      .post('/', checkAdmin, controller.create)
      .put('/:id', checkAdmin, controller.update)
      .delete('/:id', checkAdmin, controller.delete)  

export default router;




