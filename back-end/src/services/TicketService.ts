import { TicketDTO } from "../DTO/TicketDTO";
import { TicketListDTO } from "../DTO/TicketListDTO";
import { TicketRepositoryInterface } from "../repository/TicketRepository";

export interface TicketServiceInterface {
    getAllTickets(): TicketDTO[];
}


export class TicketService implements TicketServiceInterface {

    private repository: TicketRepositoryInterface;

    constructor(repository: TicketRepositoryInterface) {
        this.repository = repository;
    }

    getAllTickets = (): TicketDTO[]  => {

        const tickets: TicketDTO[] = this.repository.getAllTickets().tickets;
        return tickets;

    }


    
}