// import {
//   getAllService,
//   getByIdService,
//   createService,
//   updateService,
//   deleteService,
// } from "../services/product.services.js";

import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
  try {
    const response = await service.getAll();
    res.status(200).json(response);
  } catch (error) {
    next(error.message);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prod = await service.getById(id);
    if (!prod) res.status(404).json({ msg: "Product not found!" });
    else res.json(prod);
  } catch (error) {
    next(error.message);
  }
};

export const create = async (req, res, next) => {
  try {
    // const { name, price, description, stock } = req.body;
    const newProd = await service.create(req.body);
    if (!newProd) res.status(404).json({ msg: "Validation Error!" });
    else res.json(newProd);
  } catch (error) {
    next(error.message);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpd = await service.update(id, req.body);
    res.json(prodUpd);
  } catch (error) {
    next(error.message);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await service.remove(id);
    res.json(prodDel);
  } catch (error) {
    next(error.message);
  }
};
