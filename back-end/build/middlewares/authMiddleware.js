"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    var token = req.header('authorization-token');
    if (!token)
        return res.status(401).send('Access Denied: Token is required');
    try {
        var secret = "HIT_COMMUNICATION";
        jsonwebtoken_1.default.verify(token, secret);
        next();
    }
    catch (error) {
        res.status(404).send("Access Denied: Token Invalid");
    }
}
exports.authMiddleware = authMiddleware;
