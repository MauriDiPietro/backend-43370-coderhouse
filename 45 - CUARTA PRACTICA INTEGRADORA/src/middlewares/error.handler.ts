import { Response } from "express";
import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse();

export const errorHandler = (error: any): Response => {
  return httpResponse.ServerError(error.message);
};
