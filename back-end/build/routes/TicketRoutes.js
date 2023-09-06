"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var TicketService_1 = require("../services/TicketService");
var TicketRepository_1 = require("../repository/TicketRepository");
var TicketController_1 = require("../controllers/TicketController");
var authMiddleware_1 = require("../middlewares/authMiddleware");
exports.router = express_1.default.Router();
var ticketRepositoryInstance = new TicketRepository_1.TicketRepository();
var ticketServiceInstance = new TicketService_1.TicketService(ticketRepositoryInstance);
var ticketControllerInstance = new TicketController_1.TicketController(ticketServiceInstance);
exports.router.get("/tickets", authMiddleware_1.authMiddleware, ticketControllerInstance.getAllTickets);
