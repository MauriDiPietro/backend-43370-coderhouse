import Services from "./class.services.js";
import factory from "../persistence/daos/factory.js";
const { prodDao } = factory;
import ProductRepository from "../persistence/repository/product/product.repository.js";
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
    constructor() {
        super(prodDao);
    }

    async getByIdDTO(id){
        try {
            const prod = await prodRepository.getByIdDTO(id);
            if(!prod) return false;
            else return prod;
        } catch (error) {
            console.log(error);
        }
    }

    createProdDTO = async (obj) => {
        try {
          const newItem = await prodRepository.createProdDTO(obj);
          if (!newItem) return false;
          else return newItem;
        } catch (error) {
          console.log(error);
        }
    };
};
