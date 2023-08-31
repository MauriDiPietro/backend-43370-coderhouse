import Services from "./class.services.js";

import persistence from "../daos/persistence.js";
const { prodDao } = persistence;

export default class ProductService extends Services {
    constructor() {
        super(prodDao);
    }
};
