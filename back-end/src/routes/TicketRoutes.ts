import express from "express";
import { TicketService } from "../services/TicketService"
import { TicketRepository } from "../repository/TicketRepository";
import { TicketController } from "../controllers/TicketController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const router = express.Router();

const ticketRepositoryInstance = new TicketRepository();
const ticketServiceInstance = new TicketService(ticketRepositoryInstance);
const ticketControllerInstance = new TicketController(ticketServiceInstance);

router.get("/tickets", authMiddleware, ticketControllerInstance.getAllTickets)


