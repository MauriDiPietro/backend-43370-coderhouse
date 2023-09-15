import Services from "./class.services.js";
import factory from "../persistence/daos/factory.js";
const { ticketDao, userDao, prodDao } = factory;

export default class TicketService extends Services {
    constructor(){
        super(ticketDao)
    }

    async generateTicket(userId){
        try {
            const user = await userDao.getById(userId);
            if(!user) return false;
            let amountAcc = 0;
            for (const prod of user.cart) {
                const idProd = prod._id.toString();
                const prodDB = await prodDao.getById(idProd);
                if(prod.quantity <= prodDB.stock){
                    const amount = prod.quantity * prodDB.price;
                    amountAcc += amount;
                }
            }
            const ticket = await ticketDao.create({
                code: `${Math.random()}`,
                purchase_datetime: new Date().toLocaleString(),
                amount: amountAcc,
                purchaser: user.email
            });
            user.cart = [];
            user.save();
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }
}