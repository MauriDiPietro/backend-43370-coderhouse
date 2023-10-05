import factory from "../daos/factory.js";
const { productDao } = factory;
import ProductDTORegister from "../dtos/product.dto.register.js";
import ProductDTOResponse from "../dtos/product.dto.response.js";

export default class ProductRepository {
    constructor() {
        this.dao = productDao;
    }

    async createProd(prod) {
        try {
            const prodDTO = new ProductDTORegister(prod);
            return await this.dao.create(prodDTO);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getProdById(id){
        try {
         const prod = await this.dao.getById(id);
         return new ProductDTOResponse(prod);   
        } catch (error) {
            throw new Error(error.message);
        }
    }
}