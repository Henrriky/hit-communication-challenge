"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRepository = void 0;
var data_json_1 = __importDefault(require("../data/data.json"));
var TicketRepository = /** @class */ (function () {
    function TicketRepository() {
        this.getAllTickets = function () {
            var ticketsJSON = JSON.stringify(data_json_1.default);
            var ticketsMapping = JSON.parse(ticketsJSON);
            return ticketsMapping;
        };
    }
    return TicketRepository;
}());
exports.TicketRepository = TicketRepository;
