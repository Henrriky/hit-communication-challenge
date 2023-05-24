import { TicketRepositoryInterface } from "../repository/TicketRepository";

export interface TicketServiceInterface {
    
    getAllTickets(): {

    }

}


export class TicketService implements TicketService {

    private repository: TicketRepositoryInterface;

    constructor(repository: TicketRepositoryInterface) {
        this.repository = repository;
    }

    getAllTickets = () => {

        return this.repository.getAllTickets()

    }


    
}