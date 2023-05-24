import express from "express";
import { TicketService } from "../services/TicketService"
import { TicketRepository } from "../repository/TicketRepository";
import { TicketController } from "../controllers/TicketController";

export const router = express.Router();

const ticketRepositoryInstance = new TicketRepository();
const ticketServiceInstance = new TicketService(ticketRepositoryInstance);
const ticketControllerInstance = new TicketController(ticketServiceInstance);

router.get("/tickets", ticketControllerInstance.getAllTickets)


