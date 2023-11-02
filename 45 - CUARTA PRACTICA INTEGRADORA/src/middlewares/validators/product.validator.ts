import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const productSchemaPost = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(10).max(50).required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
});

const productSchemaGet = Joi.object({
  id: Joi.string().min(10).required(),
});

export const validatePostProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = productSchemaPost.validate(req.body, { abortEarly: false });
  error ? res.status(404).send(error) : next();
};

export const validateGetProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = productSchemaGet.validate(req.params, {
    abortEarly: false,
  });
  error ? res.status(404).send(error) : next();
};
