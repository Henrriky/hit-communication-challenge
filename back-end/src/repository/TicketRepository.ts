import { TicketListDTO } from "../DTO/TicketListDTO";
import data from "../data/data.json"

export interface TicketRepositoryInterface {

    getAllTickets(): TicketListDTO

}

export class TicketRepository implements TicketRepositoryInterface {

    constructor () {

    }

    getAllTickets = (): TicketListDTO => {

        const ticketsJSON = JSON.stringify(data);
        const ticketsMapping: TicketListDTO = JSON.parse(ticketsJSON);

        return ticketsMapping;
    }

}