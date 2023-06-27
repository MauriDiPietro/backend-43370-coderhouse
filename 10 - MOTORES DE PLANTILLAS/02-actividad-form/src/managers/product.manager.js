import fs from "fs";
import {__dirname} from '../utils.js';

const pathFile = __dirname + "/db/products.json";

export const getMaxId = async () => {
  let maxId = 0;
  const users = await getAllProducts();
  users.map((user) => {
    if (user.id > maxId) maxId = user.id;
  });
  return maxId;
};

export const getAllProducts = async () => {
  try {
    if (fs.existsSync(pathFile)) {
      const products = await fs.promises.readFile(pathFile, "utf-8");
      const productsJSON = JSON.parse(products);
      return productsJSON;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const products = await getAllProducts();
    const product = products.find((prod) => prod.id === id);
    if (product) {
      return product;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (obj) => {
  try {
    const product = {
      id: (await getMaxId()) + 1,
      ...obj,
    };
    const productsFile = await getAllProducts();
    productsFile.push(product);
    await fs.promises.writeFile(pathFile, JSON.stringify(productsFile));
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (obj, id) => {
  try {
    const productsFile = await getAllProducts();
    const index = productsFile.findIndex((prod) => prod.id === id);
    console.log("index:::", index);
    if (index === -1) {
      throw new Error(`Id ${id} not found`);
    } else {
      productsFile[index] = { ...obj, id };
    }
    await fs.promises.writeFile(pathFile, JSON.stringify(productsFile));
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (id) => {
  try {
    const productsFile = await getAllProducts();
    if (productsFile.length > 0) {
      const newArray = productsFile.filter((prod) => prod.id !== id);
      await fs.promises.writeFile(pathFile, JSON.stringify(newArray));
    } else {
      throw new Error(`Product id: ${id} not found`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllProducts = async () => {
  try {
    if (fs.existsSync(pathFile)) {
      await fs.promises.unlink(pathFile);
    }
  } catch (error) {
    console.log(error);
  }
};