import { tickets } from "../data/data.json"

export interface TicketRepositoryInterface {

    getAllTickets(): {

    }

}

export class TicketRepository implements TicketRepositoryInterface {

    constructor () {

    }

    getAllTickets = () => {
        return tickets;
    }

}