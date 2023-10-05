import Services from "./class.services.js";
import factory from '../persistence/daos/factory.js';
const { productDao } = factory;
import ProductRepository from "../persistence/repository/product.repository.js";
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
  constructor(){
    super(productDao)
  }

  async createProd(prod) {
    try {
      const newProd = await prodRepository.createProd(prod);
      if(!newProd) return false;
      else return newProd;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  async getProdById(id){
    try {
      const prod = await prodRepository.getProdById(id);
      if(!prod) return false;
      else return prod;   
    } catch (error) {
      throw new Error(error.message);
    }
  }
}


