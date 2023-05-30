class TicketManager {
    #priceBaseGain = 0.15;
    constructor(){
        this.events = [];
    }

    addEvent(name, site, price, capacity = 50, date = new Date()) {
        const event = {
            id: this.#getMaxId() + 1,
            name,
            site,
            price: price + this.#priceBaseGain,
            capacity,
            date,
            participants: []
        };
        this.events.push(event);
    }

    #getMaxId(){
        let maxId = 0;
        this.events.map((event) =>{
            if(event.id > maxId) maxId = event.id;
        })
        return maxId;
    }

    getEvents(){
        return this.events;
    }

    addUser(idEvent, idUser){
        const event = this.#getEvent(idEvent);
        if(event){
            if(!event.participants.includes(idUser)) event.participants.push(idUser); 
        } else {
            console.log('this event not exists!');
        }
    }

    #getEvent(idEvent){
        return this.events.find(event => event.id === idEvent);
    }

    eventTour(idEvent, newSite, newDate){
        const event = this.#getEvent(idEvent);
        if(event){
            const newEvent = {
                ...event,
                id: this.#getMaxId() + 1,
                site: newSite,
                date: newDate,
                participants: []
            };
            this.events.push(newEvent);
        } else {
            console.log('this event not exists!');
        }
    }
}

const ticketManager = new TicketManager();

ticketManager.addEvent('Argentina vs Nigeria', 'Santiago del Estero', 56000, 654654456);
ticketManager.addEvent('Mexico vs Brasil', 'Córdoba', 56000, 654654456);
ticketManager.addEvent('Recital ColdPlay', 'Córdoba', 56000, 654654456);
ticketManager.addUser(1, 'Alejandro')
ticketManager.addUser(1, 'Mateo')
ticketManager.eventTour(3, 'Buenos Aires', new Date("2023/06/06"))
console.log(ticketManager.getEvents());


