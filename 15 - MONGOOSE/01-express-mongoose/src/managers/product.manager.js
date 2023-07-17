import { ProductModel } from "../models/product.model.js";

export default class ProductManager {
    // constructor(model) {
    //     this.model = model;
    // }
/*
    async getAll(){
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }
*/

async getAll(){
    try {
        const response = await ProductModel.find({});
        return response;
    } catch (error) {
        console.log(error);
    }
}

/*
    export const getAll = async() => {
        try {
            const response = await ProductModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }
*/

async getById(id) {
    try {
        const response = await ProductModel.findById(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async create(obj){
    try {
        const response = await ProductModel.create(obj);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async update(id, obj){
    try {
        await ProductModel.updateOne({_id: id}, obj);
        return obj;
    } catch (error) {
        console.log(error);
    }
}

async delete(id){
    try {
      const response = await ProductModel.findByIdAndDelete(id);
      return response;  
    } catch (error) {
        console.log(error);
    }
}

}