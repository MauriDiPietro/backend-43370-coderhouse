import factory from "../../daos/factory.js";
const { prodDao } = factory;
import ProductResDTO from "../../dtos/product/product.res.dto.js";

export default class ProductRepository {
    constructor(){
        this.dao = prodDao;
    }

    async getByIdDTO(id){
        try {
            const response = await this.dao.getById(id);
            return new ProductResDTO(response);
        } catch (error) {
            console.log(error);
        }
    }
}