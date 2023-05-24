import { Request, Response } from "express"
import { TicketServiceInterface } from "../services/TicketService";
import { TicketDTO } from "../DTO/Tickets/TicketDTO";


export class TicketController {

    private service: TicketServiceInterface;

    constructor(service: TicketServiceInterface) {
        this.service = service;
    }

    getAllTickets = (req: Request, res: Response) => {
        try {
            const tickets: TicketDTO[] = this.service.getAllTickets();

            if(tickets.length === 0) {
                res.send(200).send("Sem tickets")
            }

            res.status(200).send(tickets);
        } catch(error) {
            res.status(500).send({ error: "Erro interno no servidor"})
        }
    }
}