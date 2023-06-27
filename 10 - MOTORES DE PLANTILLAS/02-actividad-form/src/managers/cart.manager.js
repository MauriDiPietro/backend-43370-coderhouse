import fs from 'fs';
import {__dirname} from '../utils.js';
import { getProductById } from './product.manager.js';
const pathFile = __dirname + "/db/carts.json";

export const getAllCarts = async () => {
    try {
      if (fs.existsSync(pathFile)) {
        const carts = await fs.promises.readFile(pathFile, "utf-8");
        const cartsJSON = JSON.parse(carts);
        return cartsJSON;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const createCart = async () => {
    try {
      const cart = {
        id: (await getMaxId()) + 1,
        products: [],
      };
      const cartsFile = await getAllCarts();
      cartsFile.push(cart);
      await fs.promises.writeFile(pathFile, JSON.stringify(cartsFile));
      return cart;
    } catch (error) {
      console.log(error);
    }
  };

  export const getCartById = async (id) => {
    try {
      const carts = await getAllCarts();
      const cart = carts.find((prod) => prod.id === id);
      if (cart) {
        return cart;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

export const saveProductToCart = async (idCart, idProduct) => {
    const cartsFile = await getAllCarts();
    const cartExist = await getCartById(idCart);
    //verificar si el producto existe
    const prodExistsinJson = await getProductById(idProduct);
    if(prodExistsinJson){
      if(cartExist) {
          const prodExistsinCart = cartExist.products.find(prod => prod.id === idProduct);
          if(prodExistsinCart) {
            prodExistsinCart.quantity + 1
          } else {
            const prod = {
              id: idProduct,
              quantity: 1
            }
            cartExist.products.push(prod);
          }
          await fs.promises.writeFile(pathFile, JSON.stringify(cartsFile));
          return cartExist
      }
    } else {
      throw new Error('product not found')
    }
}