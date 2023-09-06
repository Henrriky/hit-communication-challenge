"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
var TicketService = /** @class */ (function () {
    function TicketService(repository) {
        var _this = this;
        this.getAllTickets = function () {
            var tickets = _this.repository.getAllTickets().tickets;
            return tickets;
        };
        this.repository = repository;
    }
    return TicketService;
}());
exports.TicketService = TicketService;
