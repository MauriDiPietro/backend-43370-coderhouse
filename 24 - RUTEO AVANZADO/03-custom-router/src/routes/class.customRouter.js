import { Router as CustomRouter } from 'express';

export default class Router {
    constructor() {
        this.router = CustomRouter();   //const router = Router();
        this.init();
    }

    getRouter() {
        return this.router;
    }

    // router.get('/', midd1, midd2, contr)
    get(path, roles, ...cb) {
        this.router.get(path, this.generateResponse, this.managerRoles(roles), this.resolveCallbacks(cb))
    }

    post(path, roles, ...cb) {
        this.router.post(path, this.generateResponse, this.managerRoles(roles), this.resolveCallbacks(cb))
    }
    
    put(path, roles, ...cb) {
        this.router.put(path, this.generateResponse, this.managerRoles(roles), this.resolveCallbacks(cb))
    }

    delete(path, roles, ...cb) {
        this.router.delete(path, this.generateResponse, this.managerRoles(roles), this.resolveCallbacks(cb))
    }

    resolveCallbacks(callbacks) {
        return callbacks.map((cb) => async(...params) => {
            try {
                await cb.apply(this, params);
            } catch (error) {
                console.log(error);
            }
        })
    };

    generateResponse(req, res, next){
        res.success = (statusCode, data) => res.status(statusCode).json({ status: 'Success', info: data });
        res.failure = (statusCode, data) => res.status(statusCode).json({ status: 'Failure', info: data });
        next();
    }

    managerRoles(roles){
        return (req, res, next)=>{
            if(roles.includes('PUBLIC'.toUpperCase())) return next();
            else res.json('No Autorizado')
        }
    }
}