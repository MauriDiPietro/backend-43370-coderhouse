import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
import { createResponse } from "../utils.js";
const productService = new ProductService();

export default class ProductController extends Controllers {
  constructor() {
    super(productService);
  }

  async getByIdDTO(req, res, next) {
    try {
      const { id } = req.params;
      const item = await productService.getByIdDTO(id);
      if (!item)
        createResponse(res, 404, {
          method: "service",
          error: "Item not found",
        });
      else createResponse(res, 200, item);
    } catch (error) {
      next(error.message);
    }
  }

  createProdDTO = async (req, res, next) => {
    try {
      const newItem = await productService.createProdDTO(req.body);
      if (!newItem) createResponse(res, 404, {method: 'create', error: "Validation error!"});
      else createResponse(res, 200, newItem);
    } catch (error) {
      next(error.message);
    }
  };
}
