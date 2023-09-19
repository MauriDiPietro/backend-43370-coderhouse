import { HttpResponse } from "./http.response.js";
const http = new HttpResponse();

export const errorMiddleware = (error, req, res, next)=>{
    console.log(error.stack);
    const status = error.statusCode || 500
    return http.ServerError(res, 'Internal Server Error')
}