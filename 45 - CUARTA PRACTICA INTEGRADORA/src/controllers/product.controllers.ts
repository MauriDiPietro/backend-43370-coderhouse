import { Request, Response, NextFunction } from "express";
import * as service from "../services/product.services";
import { HttpResponse } from "../utils/http.response";
const httpResp = new HttpResponse();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProd = await service.create(req.body);
    if (!newProd) return httpResp.NotFound(res, "ERROR_CREATE");
    return httpResp.Ok(res, newProd);
  } catch (error: unknown) {
    next((error as Error).message);
  }
};

export const getAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const prods = await service.getAll();
    if (!prods) return httpResp.NotFound(res, "ERROR_GET");
    return httpResp.Ok(res, prods);
  } catch (error: unknown) {
    next((error as Error).message);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const prod = await service.getById(id);
    if (!prod) return httpResp.NotFound(res, "ERROR_GETBYID");
    return httpResp.Ok(res, prod);
  } catch (error: unknown) {
    next((error as Error).message);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const prodUpd = await service.update(id, req.body);
    if (!prodUpd) return httpResp.NotFound(res, "ERROR_UPDATE");
    return httpResp.Ok(res, prodUpd);
  } catch (error: unknown) {
    next((error as Error).message);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const prodDel = await service.remove(id);
    if (!prodDel) return httpResp.NotFound(res, "ERROR_DELETE");
    return httpResp.Ok(res, "Product deleted successfully");
  } catch (error: unknown) {
    next((error as Error).message);
  }
};
