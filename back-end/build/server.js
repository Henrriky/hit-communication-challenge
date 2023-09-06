"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var TicketRoutes_1 = require("./routes/TicketRoutes");
var LoginRoutes_1 = require("./routes/LoginRoutes");
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/calls", TicketRoutes_1.router);
app.use("/auth/", LoginRoutes_1.router);
app.listen(3333, function () {
    console.log("Listening on port 3333");
});
