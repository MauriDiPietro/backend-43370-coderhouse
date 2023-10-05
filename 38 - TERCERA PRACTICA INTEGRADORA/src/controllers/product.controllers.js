import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
const productService = new ProductService();
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();
import errors from "../utils/errors.dictionary.js";

export default class ProductController extends Controllers{
  constructor(){
    super(productService)
  }

  async createProd(req, res, next){
    try {
      const newProd = await productService.createProd(req.body);
      if(!newProd) return httpResponse.NotFound(res, errors.PROD_NOT_FOUND);
      else return httpResponse.Ok(res, newProd);
    } catch (error) {
      next(error.message)
    }
  };

  async getProdById(req, res, next){
    try {
      const { id } = req.params;
      const prod = await productService.getProdById(id);
      if(!prod) return httpResponse.NotFound(res, errors.PROD_NOT_FOUND);
      else return httpResponse.Ok(res, prod);      
    } catch (error) {
      next(error.message)
    }
  }
}


