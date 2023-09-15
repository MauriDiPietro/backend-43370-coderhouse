export default class ProductResDTO {
    constructor(product) {
        this.nombre = product.name
        this.precio = product.price
        this.disponibilidad = product.stock
    }
};