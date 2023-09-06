"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
var TicketController = /** @class */ (function () {
    function TicketController(service) {
        var _this = this;
        this.getAllTickets = function (req, res) {
            try {
                var tickets = _this.service.getAllTickets();
                if (tickets.length === 0) {
                    res.send(200).send("Sem tickets");
                }
                res.status(200).send(tickets);
            }
            catch (error) {
                res.status(500).send({ error: "Erro interno no servidor" });
            }
        };
        this.service = service;
    }
    return TicketController;
}());
exports.TicketController = TicketController;
