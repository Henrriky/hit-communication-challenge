import { Request, Response } from "express"
import { TicketServiceInterface } from "../services/TicketService";

export class TicketController {

    private service: TicketServiceInterface;

    constructor(service: TicketServiceInterface) {
        this.service = service;
    }

    getAllTickets = async (req: Request, res: Response): Promise<void> => {
        res.send(await this.service.getAllTickets());
    }
}